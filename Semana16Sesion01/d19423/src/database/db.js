const { Pool } = require('pg');

const con = new Pool({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    port: process.env.PGPORT || 5432
});

const initDatabase = async () => {
    await con.query(`
        CREATE TABLE IF NOT EXISTS message (
            id SERIAL PRIMARY KEY,
            message TEXT,
            "user" VARCHAR(256)
        )
    `);

    await con.query(`
        CREATE TABLE IF NOT EXISTS login (
            id SERIAL PRIMARY KEY,
            username VARCHAR(256) UNIQUE,
            password VARCHAR(256)
        )
    `);
};

initDatabase()
    .then(() => console.log('Conexion a PostgreSQL lista'))
    .catch((err) => {
        console.error('Error al conectar con PostgreSQL:', err);
        process.exit(1);
    });

module.exports = con;
