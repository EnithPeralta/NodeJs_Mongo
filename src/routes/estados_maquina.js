const express = require("express");
const estadoMaquinaSchema = "../models/estados_maquina"
const router = express.Router();

// Crear un estado de máquina
router.post('/estadosMaquina', (req, res) => {
    const estadoMaquina = new estadoMaquinaSchema(req.body);
    estadoMaquina
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Obtener todos los estados de máquina
router.get('/estadosMaquina', (req, res) => {
    estadoMaquinaSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Obtener un estado de máquina por ID
router.get('/estadosMaquina/:id', (req, res) => {
    const { id } = req.params;
    estadoMaquinaSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Actualizar un estado de máquina por ID
router.put('/estadosMaquina/:id', (req, res) => {
    const { id } = req.params;
    const { estado, rotor, temperatura, temperatura_s1, temperatura_s2, temperatura_promedio, fecha, maquina, operarios, lote_cafe } = req.body;
    estadoMaquinaSchema
    .updateOne({_id:id}, {$set:{ estado, rotor, temperatura, temperatura_s1, temperatura_s2, temperatura_promedio, fecha, maquina, operarios, lote_cafe }})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Borrar un estado de máquina por ID
router.delete('/estadosMaquina/:id', (req, res) => {
    const { id } = req.params;
    estadoMaquinaSchema
    .deleteOne({_id:id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
