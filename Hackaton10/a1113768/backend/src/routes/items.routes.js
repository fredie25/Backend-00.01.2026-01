const { Router } = require('express');
const Item = require('../models/Item');

const router = Router();

// Crear ítem
router.post('/', async (req, res) => {
  try {
    const item = await Item.create(req.body);
    res.status(201).json({ ok: true, data: item });
  } catch (err) {
    res.status(400).json({ ok: false, error: err.message });
  }
});

// Pendientes
router.get('/pendientes', async (req, res) => {
  try {
    const items = await Item.find({ esCompletado: false }).sort({ fecha: 1 });
    res.json({ ok: true, data: items });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

// Completados
router.get('/completados', async (req, res) => {
  try {
    const items = await Item.find({ esCompletado: true }).sort({ updatedAt: -1 });
    res.json({ ok: true, data: items });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

// Completar un ítem
router.patch('/:id/completar', async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(
      req.params.id,
      { esCompletado: true },
      { new: true }
    );
    if (!item) return res.status(404).json({ ok: false, error: 'No encontrado' });
    res.json({ ok: true, data: item });
  } catch (err) {
    res.status(400).json({ ok: false, error: err.message });
  }
});

module.exports = router;