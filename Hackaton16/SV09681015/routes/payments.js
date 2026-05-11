const router  = require('express').Router();
const db      = require('../config/database');
const { isAuthenticated, isAuthenticatedAPI } = require('../middleware/auth');

// Inicialización lazy de Stripe (espera a que dotenv cargue las variables)
function getStripe() {
  return require('stripe')(process.env.STRIPE_SECRET_KEY);
}

// ─── Catálogo de productos ─────────────────────────────────────────────────────
router.get('/products', isAuthenticated, async (req, res) => {
  const [products] = await db.query(
    'SELECT * FROM products WHERE active = TRUE ORDER BY price ASC'
  );
  res.render('products', { title: 'Tienda', products, user: req.user });
});

// ─── Dashboard del usuario ────────────────────────────────────────────────────
router.get('/dashboard', isAuthenticated, async (req, res) => {
  const [orders] = await db.query(
    'CALL sp_user_purchase_history(?)', [req.user.id]
  );
  const [stats] = await db.query(
    `SELECT COUNT(*) AS total_orders, COALESCE(SUM(total),0) AS total_spent
     FROM orders WHERE user_id = ? AND status = 'paid'`,
    [req.user.id]
  );
  res.render('dashboard', {
    title:    'Mi cuenta',
    user:     req.user,
    orders:   orders[0] || [],
    stats:    stats[0],
  });
});

// ─── Crear sesión de pago Stripe Checkout ─────────────────────────────────────
router.post('/checkout', isAuthenticatedAPI, async (req, res) => {
  const { items } = req.body;
  if (!items?.length) return res.status(400).json({ error: 'Carrito vacío' });

  try {
    const stripe = getStripe();

    const ids = items.map(i => i.productId);
    const [products] = await db.query(
      `SELECT * FROM products WHERE id IN (?) AND active = TRUE`, [ids]
    );

    if (!products.length) return res.status(400).json({ error: 'Productos no encontrados' });

    const total = products.reduce((sum, p) => {
      const qty = items.find(i => i.productId === p.id)?.quantity || 1;
      return sum + p.price * qty;
    }, 0);

    const [orderResult] = await db.query(
      'INSERT INTO orders (user_id, total, status) VALUES (?,?,?)',
      [req.user.id, total.toFixed(2), 'pending']
    );
    const orderId = orderResult.insertId;

    for (const p of products) {
      const qty = items.find(i => i.productId === p.id)?.quantity || 1;
      await db.query(
        'INSERT INTO order_items (order_id, product_id, quantity, unit_price) VALUES (?,?,?,?)',
        [orderId, p.id, qty, p.price]
      );
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      customer_email:       req.user.email,
      line_items: products.map(p => ({
        price_data: {
          currency:     'usd',
          product_data: { name: p.name, description: p.description },
          unit_amount:  Math.round(p.price * 100),
        },
        quantity: items.find(i => i.productId === p.id)?.quantity || 1,
      })),
      mode:        'payment',
      metadata:    { orderId: String(orderId), userId: String(req.user.id) },
      success_url: `${process.env.BASE_URL}/payments/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url:  `${process.env.BASE_URL}/products`,
    });

    await db.query(
      'UPDATE orders SET stripe_payment_id = ? WHERE id = ?',
      [session.id, orderId]
    );

    res.json({ url: session.url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al procesar el pago' });
  }
});

// ─── Página de éxito ──────────────────────────────────────────────────────────
router.get('/success', isAuthenticated, async (req, res) => {
  const { session_id } = req.query;
  try {
    const stripe  = getStripe();
    const session = await stripe.checkout.sessions.retrieve(session_id);
    if (session.payment_status === 'paid') {
      const orderId = session.metadata.orderId;
      await db.query(
        'UPDATE orders SET status="paid", stripe_payment_id=? WHERE id=?',
        [session.payment_intent, orderId]
      );
    }
    res.render('success', { title: '¡Pago exitoso!', user: req.user });
  } catch (err) {
    res.redirect('/dashboard');
  }
});

// ─── Solicitar devolución ─────────────────────────────────────────────────────
router.post('/refund', isAuthenticatedAPI, async (req, res) => {
  const { orderId, reason } = req.body;
  try {
    const stripe = getStripe();
    const conn   = await db.getConnection();
    try {
      await conn.beginTransaction();

      await conn.query(
        'CALL sp_process_refund(?, ?, ?, @refund_id, @amount)',
        [orderId, req.user.id, reason]
      );

      const [[order]] = await conn.query(
        'SELECT stripe_payment_id FROM orders WHERE id = ?', [orderId]
      );

      if (order?.stripe_payment_id) {
        const stripeRefund = await stripe.refunds.create({
          payment_intent: order.stripe_payment_id,
        });
        await conn.query(
          'UPDATE refunds SET stripe_refund_id=?, status="processed" WHERE order_id=?',
          [stripeRefund.id, orderId]
        );
      }

      await conn.commit();
      res.json({ success: true, message: 'Devolución procesada correctamente' });
    } catch (err) {
      await conn.rollback();
      throw err;
    } finally {
      conn.release();
    }
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message || 'Error al procesar la devolución' });
  }
});

// ─── Webhook de Stripe (raw body requerido) ───────────────────────────────────
router.post('/webhook',
  require('express').raw({ type: 'application/json' }),
  async (req, res) => {
    const stripe = getStripe();
    const sig    = req.headers['stripe-signature'];
    let event;
    try {
      event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
    } catch (err) {
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      await db.query(
        'UPDATE orders SET status="paid", stripe_payment_id=? WHERE stripe_payment_id=?',
        [session.payment_intent, session.id]
      );
    }

    if (event.type === 'charge.refunded') {
      const charge = event.data.object;
      await db.query(
        `UPDATE orders o
         JOIN refunds r ON r.order_id = o.id
         SET r.status = 'processed'
         WHERE o.stripe_payment_id = ?`,
        [charge.payment_intent]
      );
    }

    res.json({ received: true });
  }
);

module.exports = router;