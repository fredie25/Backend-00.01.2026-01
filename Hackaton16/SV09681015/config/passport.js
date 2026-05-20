const passport        = require('passport');
const GoogleStrategy  = require('passport-google-oauth20').Strategy;
const GitHubStrategy  = require('passport-github2').Strategy;
const db              = require('./database');

// ─── Serialización ───────────────────────────────────────────────────────────
passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser(async (id, done) => {
  try {
    const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    done(null, rows[0] || false);
  } catch (err) {
    done(err);
  }
});

// ─── Helper: upsert de usuario OAuth ─────────────────────────────────────────
async function findOrCreate(profile, provider) {
  const oauthId = profile.id;
  const name    = profile.displayName || profile.username || 'Usuario';
  const email   = profile.emails?.[0]?.value || null;
  const avatar  = profile.photos?.[0]?.value || null;

  const [rows] = await db.query(
    'SELECT * FROM users WHERE oauth_id = ? AND provider = ?',
    [oauthId, provider]
  );

  if (rows.length > 0) {
    // Actualizar datos si cambiaron
    await db.query(
      'UPDATE users SET name=?, email=?, avatar=? WHERE id=?',
      [name, email, avatar, rows[0].id]
    );
    return { ...rows[0], name, email, avatar };
  }

  const [result] = await db.query(
    'INSERT INTO users (oauth_id, provider, name, email, avatar) VALUES (?,?,?,?,?)',
    [oauthId, provider, name, email, avatar]
  );
  const [newUser] = await db.query('SELECT * FROM users WHERE id = ?', [result.insertId]);
  return newUser[0];
}

// ─── Google Strategy ──────────────────────────────────────────────────────────
passport.use(new GoogleStrategy({
  clientID:     process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL:  process.env.GOOGLE_CALLBACK_URL,
}, async (accessToken, refreshToken, profile, done) => {
  try {
    const user = await findOrCreate(profile, 'google');
    done(null, user);
  } catch (err) {
    done(err);
  }
}));

// ─── GitHub Strategy ──────────────────────────────────────────────────────────
passport.use(new GitHubStrategy({
  clientID:     process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL:  process.env.GITHUB_CALLBACK_URL,
  scope:        ['user:email'],
}, async (accessToken, refreshToken, profile, done) => {
  try {
    const user = await findOrCreate(profile, 'github');
    done(null, user);
  } catch (err) {
    done(err);
  }
}));

module.exports = passport;
