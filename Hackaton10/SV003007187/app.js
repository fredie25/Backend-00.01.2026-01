 const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

// MIDDLEWARES 
app.use(cors());                    
app.use(express.json());            
app.use(express.static('public'));  

// No necesitamos MongoDB, usamos base de datos en memoria
console.log(' Usando base de datos en memoria');

// RUTAS
const itemRoutes = require('./routes/items');
app.use('/api', itemRoutes);

// RUTA PRINCIPAL 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

module.exports = app;