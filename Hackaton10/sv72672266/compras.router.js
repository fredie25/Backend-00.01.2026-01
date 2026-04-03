const comprasRouter = require("express").Router();
const { ObjectId } = require("mongodb");
const { getDB } = require("./db");

const collection = "compras";

comprasRouter.post("/", async (req, res) => {
  try {
    const db = await getDB();
    const { nombre, descripcion, fecha, esCompletado } = req.body;

    if (!nombre || !descripcion || !fecha) {
      return res.status(400).send({
        message: "Los campos nombre, descripcion y fecha son obligatorios.",
      });
    }

    const nuevaCompra = {
      nombre,
      descripcion,
      fecha,
      esCompletado: Boolean(esCompletado),
      createdAt: new Date(),
    };

    const resultado = await db.collection(collection).insertOne(nuevaCompra);

    return res.status(201).send({
      message: "Item creado con exito",
      data: { ...nuevaCompra, _id: resultado.insertedId },
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

comprasRouter.get("/pendientes", async (req, res) => {
  try {
    const db = await getDB();
    const pendientes = await db
      .collection(collection)
      .find({ esCompletado: false })
      .toArray();

    return res.send({ data: pendientes });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

comprasRouter.get("/completados", async (req, res) => {
  try {
    const db = await getDB();
    const completados = await db
      .collection(collection)
      .find({ esCompletado: true })
      .toArray();

    return res.send({ data: completados });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

comprasRouter.patch("/:id/completar", async (req, res) => {
  try {
    const db = await getDB();
    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
      return res.status(400).send({ message: "ID invalido" });
    }

    const resultado = await db.collection(collection).findOneAndUpdate(
      { _id: new ObjectId(id) },
      {
        $set: {
          esCompletado: true,
          completedAt: new Date(),
        },
      },
      { returnDocument: "after" }
    );

    if (!resultado) {
      return res.status(404).send({ message: "Item no encontrado" });
    }

    return res.send({
      message: "Item marcado como completado",
      data: resultado,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

module.exports = { comprasRouter };
