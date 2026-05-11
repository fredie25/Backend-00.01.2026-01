// Protege rutas: redirige a login si no hay sesión
function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return next();
  req.session.returnTo = req.originalUrl;
  res.redirect('/auth/login');
}

// Para rutas de API: responde con JSON en lugar de redirect
function isAuthenticatedAPI(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.status(401).json({ error: 'No autenticado' });
}

module.exports = { isAuthenticated, isAuthenticatedAPI };