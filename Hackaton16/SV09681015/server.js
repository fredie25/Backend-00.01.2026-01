require('dotenv').config();

const express        = require('express');
const http           = require('http');
const { Server }     = require('socket.io');
const session        = require('express-session');
const bodyParser     = require('body-parser');
const cors           = require('cors');
const path           = require('path');
const passport       = require('./config/passport');

// ─── Rutas ────────────────────────────────────────────────────────────────────
const authRoutes     = require('./routes/auth');
const paymentRoutes  = require('./routes/payments');

const app    = express();
const server = http.createServer(app);
const io     = new Server(server, { cors: { origin: '*' } });

// ─── Motor de vistas ──────────────────────────────────────────────────────────
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ─── Middlewares ──────────────────────────────────────────────────────────────
// El webhook de Stripe necesita raw body, registrarlo ANTES del json parser
app.use('/payments/webhook', express.raw({ type: 'application/json' }));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret:            process.env.SESSION_SECRET || 'dev_secret_change_in_prod',
  resave:            false,
  saveUninitialized: false,
  cookie:            { secure: false, maxAge: 24 * 60 * 60 * 1000 }, // 24h
}));

app.use(passport.initialize());
app.use(passport.session());


console.log('Stripe key cargada:', process.env.STRIPE_SECRET_KEY?.substring(0, 7));


// Exponer io a todas las rutas
app.use((req, res, next) => {
  req.io = io;
  next();
});

// ─── Rutas ────────────────────────────────────────────────────────────────────
app.get('/', (req, res) => {
  if (req.isAuthenticated()) return res.redirect('/dashboard');
  res.render('index', { title: 'Bienvenido' });
});

app.use('/auth',     authRoutes);
app.use('/payments', paymentRoutes);
app.get('/products', (req, res) => res.redirect('/payments/products'));
app.get('/dashboard',(req, res) => res.redirect('/payments/dashboard'));

// ─── Socket.io – Notificaciones en tiempo real ────────────────────────────────
io.on('connection', (socket) => {
  console.log(`🔌 Socket conectado: ${socket.id}`);

  socket.on('join_user', (userId) => {
    socket.join(`user_${userId}`);
    console.log(`👤 Usuario ${userId} unido a sala`);
  });

  socket.on('disconnect', () => {
    console.log(`❌ Socket desconectado: ${socket.id}`);
  });
});

// Helper global para emitir notificaciones de pago
global.notifyPayment = (userId, event, data) => {
  io.to(`user_${userId}`).emit(event, data);
};

// ─── Manejo de errores ────────────────────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('error', { title: 'Error', message: err.message });
});

// ─── Arrancar ─────────────────────────────────────────────────────────────────
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`
  ╔════════════════════════════════════════╗
  ║   🚀  Payment System en puerto ${PORT}    ║
  ║   http://localhost:${PORT}                ║
  ╚════════════════════════════════════════╝
  `);
});
