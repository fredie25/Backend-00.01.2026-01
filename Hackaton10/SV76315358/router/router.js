const tiendaRouter = require('express').Router();
const { ObjectId } = require("mongodb");
const { getDB } = require("../db");
const collection = 'compradores';

tiendaRouter.get('/', async (req, res) => {
    try {
        const db = await getDB();
        let registros = await db.collection(collection).find().toArray();
        res.send({ data: registros });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});


tiendaRouter.get('/pendientes', async (req, res) => {
    try {
        const db = await getDB();

        let registros = await db.collection(collection).find({ EsCompletado: false }).toArray();
        res.send({ data: registros });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});


tiendaRouter.get('/completados', async (req, res) => {
    try {
        const db = await getDB();

        let registros = await db.collection(collection).find({ EsCompletado: true }).toArray();
        res.send({ data: registros });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

tiendaRouter.post('/', async (req, res) => {
    try {
        const db = await getDB();
        const data = req.body;

        if (!data || (Array.isArray(data) && data.length === 0)) {
            return res.status(400).send({ message: "No se enviaron datos" });
        }

        let resultado = Array.isArray(data)
            ? await db.collection(collection).insertMany(data)
            : await db.collection(collection).insertOne(data);

        res.status(201).send({ message: "Guardado con éxito", detalles: resultado });
    } catch (error) {
        res.status(500).send({ message: "Error interno: " + error.message });
    }
});


tiendaRouter.patch('/completar/:id', async (req, res) => {
    try {
        const db = await getDB();
        const { id } = req.params;

        const resultado = await db.collection(collection).updateOne(
            { _id: new ObjectId(id) },
            { $set: { EsCompletado: true } }
        );

        if (resultado.matchedCount === 0) {
            return res.status(404).send({ message: "Item no encontrado" });
        }

        res.send({ message: "Item marcado como completado" });
    } catch (error) {
        res.status(500).send({ message: "Error al actualizar: " + error.message });
    }
});


module.exports = { tiendaRouter };