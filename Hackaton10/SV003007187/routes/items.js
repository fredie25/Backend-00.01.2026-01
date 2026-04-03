 const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

//   RUTA 1: CREAR un item  
router.post('/items', async (req, res) => {
    try {
        const { nombre, descripcion } = req.body;
        
        if (!nombre) {
            return res.status(400).json({
                success: false,
                message: 'El nombre es obligatorio'
            });
        }
        
        const nuevoItem = await Item.create({
            nombre: nombre.trim(),
            descripcion: descripcion ? descripcion.trim() : '',
            fecha: new Date(),
            esCompletado: false
        });
        
        res.status(201).json({
            success: true,
            data: nuevoItem
        });
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

//  RUTA 2: MOSTRAR pendientes  
router.get('/items/pendientes', async (req, res) => {
    try {
        const items = await Item.find({ esCompletado: false });
        // Ordenar por fecha descendente (más reciente primero)
        items.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
        
        res.json({
            success: true,
            count: items.length,
            data: items
        });
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

//  RUTA 3: MOSTRAR completados  
router.get('/items/completados', async (req, res) => {
    try {
        const items = await Item.find({ esCompletado: true });
        items.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
        
        res.json({
            success: true,
            count: items.length,
            data: items
        });
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// RUTA 4: COMPLETAR un item 
router.patch('/items/:id/completar', async (req, res) => {
    try {
        const { id } = req.params;
        
        const item = await Item.findById(id);
        
        if (!item) {
            return res.status(404).json({
                success: false,
                message: 'Item no encontrado'
            });
        }
        
        const itemActualizado = await Item.findByIdAndUpdate(
            id,
            { esCompletado: true },
            { new: true }
        );
        
        res.json({
            success: true,
            data: itemActualizado
        });
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

//  RUTA EXTRA: OBTENER TODOS  
router.get('/items', async (req, res) => {
    try {
        const items = await Item.find();
        items.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
        
        res.json({
            success: true,
            count: items.length,
            data: items
        });
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

module.exports = router;