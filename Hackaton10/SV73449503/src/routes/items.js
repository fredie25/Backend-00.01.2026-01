const express = require("express");
const Item = require("../models/Item");

const router = express.Router();

// Crear un item de la lista
router.post("/", async (req, res) => {
  try {
    const { nombre, descripcion, fecha, esCompletado } = req.body;

    if (!nombre || !descripcion || !fecha) {
      return res.status(400).json({
        error: "Campos requeridos: nombre, descripcion, fecha"
      });
    }

    const item = await Item.create({
      nombre,
      descripcion,
      fecha,
      esCompletado: esCompletado ?? false
    });

    return res.status(201).json(item);
  } catch (err) {
    return res.status(500).json({ error: "Error al crear el item" });
  }
});

// Mostrar pendientes
router.get("/pendientes", async (req, res) => {
  try {
    const items = await Item.find({ esCompletado: false }).sort({ fecha: 1 });
    return res.json(items);
  } catch (err) {
    return res.status(500).json({ error: "Error al obtener pendientes" });
  }
});

// Mostrar completados
router.get("/completados", async (req, res) => {
  try {
    const items = await Item.find({ esCompletado: true }).sort({ fecha: 1 });
    return res.json(items);
  } catch (err) {
    return res.status(500).json({ error: "Error al obtener completados" });
  }
});

// Completar un item
router.patch("/:id/completar", async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Item.findByIdAndUpdate(
      id,
      { esCompletado: true },
      { new: true }
    );

    if (!item) {
      return res.status(404).json({ error: "Item no encontrado" });
    }

    return res.json(item);
  } catch (err) {
    return res.status(500).json({ error: "Error al completar el item" });
  }
});

module.exports = router;
