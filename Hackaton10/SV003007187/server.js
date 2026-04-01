const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Este Servidor corriendo en http://localhost:${PORT}`);
    console.log(` API disponible solo en http://localhost:${PORT}/api/items`);
});