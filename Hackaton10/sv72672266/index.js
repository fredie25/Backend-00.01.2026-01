console.log("Inicio de la aplicacion");
require("dotenv").config();

const express = require("express");
const { comprasRouter } = require("./compras.router");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/compras", comprasRouter);

app.get("/", (req, res) => {
	res.send({ message: "online" });
});

app.listen(PORT, () => {
	console.log(`Servidor escuchando en el puerto ${PORT}`);
});
