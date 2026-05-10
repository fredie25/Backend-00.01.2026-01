const state = {
  user: null,
  products: [],
  payments: [],
};

const els = {
  sessionState: document.querySelector('#sessionState'),
  productForm: document.querySelector('#productForm'),
  checkoutForm: document.querySelector('#checkoutForm'),
  checkoutProduct: document.querySelector('#checkoutProduct'),
  productsList: document.querySelector('#productsList'),
  paymentsList: document.querySelector('#paymentsList'),
  log: document.querySelector('#log'),
  btnMockLogin: document.querySelector('#btnMockLogin'),
  btnLogout: document.querySelector('#btnLogout'),
  btnReloadProducts: document.querySelector('#btnReloadProducts'),
  btnReloadPayments: document.querySelector('#btnReloadPayments'),
};

function money(cents, currency = 'PEN') {
  return new Intl.NumberFormat('es-PE', { style: 'currency', currency }).format(cents / 100);
}

function logLine(message, payload) {
  const date = new Date().toLocaleTimeString();
  const block = payload ? `${message} ${JSON.stringify(payload)}` : message;
  els.log.textContent = `[${date}] ${block}\n${els.log.textContent}`;
}

async function api(path, options = {}) {
  const res = await fetch(path, {
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options,
  });

  const body = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(body.error || `Error ${res.status}`);
  }

  return body;
}

function renderSession() {
  if (!state.user) {
    els.sessionState.textContent = 'No autenticado';
    return;
  }
  els.sessionState.textContent = `${state.user.name || 'Usuario'} (${state.user.email || 'sin-email'})`;
}

function renderProducts() {
  const list = state.products
    .map(
      (p) => `
      <article class="item">
        <p><strong>#${p.id} ${p.name}</strong></p>
        <p>${p.description || 'Sin descripción'}</p>
        <p>${money(p.price_cents, p.currency)}</p>
      </article>
    `,
    )
    .join('');

  els.productsList.innerHTML = list || '<p class="muted">No hay productos aún.</p>';
  els.checkoutProduct.innerHTML = state.products
    .map((p) => `<option value="${p.id}">#${p.id} ${p.name} - ${money(p.price_cents, p.currency)}</option>`)
    .join('');
}

function renderPayments() {
  if (!state.user) {
    els.paymentsList.innerHTML = '<p class="muted">Inicia sesión para ver tus pagos.</p>';
    return;
  }

  const rows = state.payments
    .map(
      (p) => `
      <article class="item">
        <p><strong>Pago #${p.payment_id}</strong> | ${p.provider.toUpperCase()} | ${p.payment_status}</p>
        <p>Total: ${money(p.amount_cents, p.currency)} | Reembolsado: ${money(p.refunded_cents, p.currency)}</p>
        <button class="btn btn-ghost" data-refund-id="${p.payment_id}">Reembolsar saldo</button>
      </article>
    `,
    )
    .join('');

  els.paymentsList.innerHTML = rows || '<p class="muted">Aún no tienes pagos.</p>';

  els.paymentsList.querySelectorAll('[data-refund-id]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const id = Number(btn.dataset.refundId);
      try {
        const result = await api(`/payments/${id}/refund`, { method: 'POST', body: JSON.stringify({}) });
        logLine('Devolución registrada', result);
        await loadPayments();
      } catch (err) {
        logLine('Error en devolución', { error: err.message });
      }
    });
  });
}

async function loadSession() {
  try {
    const data = await api('/me');
    state.user = data.user;
    renderSession();
  } catch (err) {
    logLine('Error cargando sesión', { error: err.message });
  }
}

async function loadProducts() {
  try {
    state.products = await api('/products');
    renderProducts();
  } catch (err) {
    logLine('Error cargando productos', { error: err.message });
  }
}

async function loadPayments() {
  if (!state.user) {
    state.payments = [];
    renderPayments();
    return;
  }

  try {
    state.payments = await api('/me/payments');
    renderPayments();
  } catch (err) {
    logLine('Error cargando pagos', { error: err.message });
  }
}

els.btnMockLogin.addEventListener('click', async () => {
  try {
    const payload = {
      provider: 'google',
      subject: `front-${Date.now()}`,
      email: 'alumno@idat.edu.pe',
      name: 'Alumno Front',
    };
    const data = await api('/auth/mock', { method: 'POST', body: JSON.stringify(payload) });
    logLine('Sesión iniciada', data.user);
    await loadSession();
    await loadPayments();
  } catch (err) {
    logLine('Error de login', { error: err.message });
  }
});

els.btnLogout.addEventListener('click', async () => {
  try {
    await api('/auth/logout', { method: 'POST', body: JSON.stringify({}) });
    state.user = null;
    state.payments = [];
    renderSession();
    renderPayments();
    logLine('Sesión cerrada');
  } catch (err) {
    logLine('Error cerrando sesión', { error: err.message });
  }
});

els.productForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const payload = {
    name: String(form.get('name') || '').trim(),
    description: String(form.get('description') || '').trim(),
    priceCents: Number(form.get('priceCents')),
    currency: 'PEN',
  };

  try {
    const created = await api('/products', { method: 'POST', body: JSON.stringify(payload) });
    logLine('Producto creado', created);
    event.currentTarget.reset();
    await loadProducts();
  } catch (err) {
    logLine('Error creando producto', { error: err.message });
  }
});

els.checkoutForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const form = new FormData(event.currentTarget);
  const payload = {
    productId: Number(form.get('productId')),
    quantity: Number(form.get('quantity')),
    provider: String(form.get('provider')),
    token: 'tok_test_front',
  };

  try {
    const result = await api('/checkout', { method: 'POST', body: JSON.stringify(payload) });
    logLine('Pago procesado', result.payment);
    await loadPayments();
  } catch (err) {
    logLine('Error en checkout', { error: err.message });
  }
});

els.btnReloadProducts.addEventListener('click', loadProducts);
els.btnReloadPayments.addEventListener('click', loadPayments);

(async function init() {
  await loadSession();
  await loadProducts();
  await loadPayments();
})();
