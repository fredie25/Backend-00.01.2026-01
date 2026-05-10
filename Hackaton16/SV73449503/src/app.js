const express = require('express');
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const OAuth2Strategy = require('passport-oauth2');

const { createDb, initSchema } = require('./db');
const { ensureAuthenticated } = require('./middleware/auth');
const { createPaymentService } = require('./services/payments');
const {
  findOrCreateUser,
  createProduct,
  listProducts,
  checkout,
  refundPayment,
  listUserPayments,
} = require('./usecases');

async function createApp(options = {}) {
  const {
    dbFile = './payments.db',
    sessionSecret = process.env.SESSION_SECRET || 'dev-secret',
    mockGateways = process.env.MOCK_PAYMENT_GATEWAYS === 'true',
    disableOAuth = process.env.DISABLE_OAUTH === 'true',
  } = options;

  const db = createDb(dbFile);
  await initSchema(db);

  const paymentService = createPaymentService({
    stripeSecretKey: process.env.STRIPE_SECRET_KEY,
    culqiSecretKey: process.env.CULQI_SECRET_KEY,
    mockGateways,
  });

  const app = express();
  app.use(express.json());
  app.use(
    session({
      secret: sessionSecret,
      resave: false,
      saveUninitialized: false,
    }),
  );

  passport.serializeUser((user, done) => done(null, user));
  passport.deserializeUser((user, done) => done(null, user));

  if (!disableOAuth) {
    passport.use(
      'oauth2',
      new OAuth2Strategy(
        {
          authorizationURL: process.env.OAUTH_AUTH_URL,
          tokenURL: process.env.OAUTH_TOKEN_URL,
          clientID: process.env.OAUTH_CLIENT_ID,
          clientSecret: process.env.OAUTH_CLIENT_SECRET,
          callbackURL: process.env.OAUTH_CALLBACK_URL || 'http://localhost:3000/auth/callback',
        },
        async (accessToken, refreshToken, profile, done) => {
          try {
            const subject = (profile && profile.id) || accessToken.slice(0, 24);
            const user = await findOrCreateUser(db, {
              provider: 'oauth2',
              subject,
              email: profile?.emails?.[0]?.value || null,
              name: profile?.displayName || 'OAuth User',
            });
            done(null, user);
          } catch (err) {
            done(err);
          }
        },
      ),
    );
  }

  app.use(passport.initialize());
  app.use(passport.session());
  app.use(express.static(path.join(__dirname, '..', 'public')));

  app.get('/health', async (req, res) => {
    const row = await db.get('SELECT 1 AS ok');
    res.json({ status: 'ok', db: row.ok === 1 });
  });

  if (!disableOAuth) {
    app.get('/auth/login', passport.authenticate('oauth2'));
    app.get(
      '/auth/callback',
      passport.authenticate('oauth2', { failureRedirect: '/auth/error', session: true }),
      (req, res) => {
        res.json({ message: 'Login OAuth exitoso', user: req.user });
      },
    );
  }

  app.post('/auth/mock', async (req, res, next) => {
    try {
      const {
        provider = 'oauth-mock',
        subject = `user-${Date.now()}`,
        email = 'estudiante@example.com',
        name = 'Estudiante OAuth',
      } = req.body || {};

      const user = await findOrCreateUser(db, { provider, subject, email, name });
      req.login(user, (err) => {
        if (err) {
          next(err);
          return;
        }
        res.json({ message: 'Sesión de prueba iniciada', user });
      });
    } catch (err) {
      next(err);
    }
  });

  app.post('/auth/logout', (req, res, next) => {
    req.logout((err) => {
      if (err) {
        next(err);
        return;
      }
      req.session.destroy((sessionErr) => {
        if (sessionErr) {
          next(sessionErr);
          return;
        }
        res.json({ message: 'Sesion cerrada' });
      });
    });
  });

  app.get('/me', (req, res) => {
    res.json({
      authenticated: Boolean(req.user),
      user: req.user || null,
    });
  });

  app.post('/products', async (req, res, next) => {
    try {
      const product = await createProduct(db, req.body || {});
      res.status(201).json(product);
    } catch (err) {
      next(err);
    }
  });

  app.get('/products', async (req, res, next) => {
    try {
      const products = await listProducts(db);
      res.json(products);
    } catch (err) {
      next(err);
    }
  });

  app.post('/checkout', ensureAuthenticated, async (req, res, next) => {
    try {
      const result = await checkout({
        db,
        paymentService,
        user: req.user,
        ...req.body,
      });
      res.status(201).json(result);
    } catch (err) {
      next(err);
    }
  });

  app.post('/payments/:paymentId/refund', ensureAuthenticated, async (req, res, next) => {
    try {
      const result = await refundPayment({
        db,
        paymentService,
        user: req.user,
        paymentId: Number(req.params.paymentId),
        amountCents: req.body?.amountCents,
      });
      res.status(201).json(result);
    } catch (err) {
      next(err);
    }
  });

  app.get('/me/payments', ensureAuthenticated, async (req, res, next) => {
    try {
      const rows = await listUserPayments(db, req.user.id);
      res.json(rows);
    } catch (err) {
      next(err);
    }
  });

  app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || 'Error interno';
    if (status >= 500) {
      console.error(err);
    }
    res.status(status).json({ error: message });
  });

  app.locals.db = db;
  app.locals.paymentService = paymentService;
  return app;
}

module.exports = {
  createApp,
};
