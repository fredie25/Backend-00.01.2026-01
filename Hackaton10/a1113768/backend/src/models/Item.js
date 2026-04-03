const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema(
  {
    nombre:       { type: String, required: true },
    descripcion:  { type: String, default: '' },
    fecha:        { type: Date,   default: Date.now },
    esCompletado: { type: Boolean, default: false }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Item', itemSchema);