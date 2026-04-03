require('dotenv').config();
const express  = require('express');
const mongoose = require('mongoose');
const path     = require('path');

const itemsRoutes = require('./routes/items.routes');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/items', itemsRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB conectado');
    app.listen(process.env.PORT || 3000, () =>
      console.log(`🚀 http://localhost:${process.env.PORT || 3000}`)
    );
  })
  .catch(err => {
    console.error('❌ Error:', err.message);
    process.exit(1);
  });