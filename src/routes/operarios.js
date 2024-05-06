const express = require("express")
const operarioSchema = require("../models/operarios")
const routes = express.Router();

//create operario
routes.post('/operarios', (req, res) => {
    const operario = operarioSchema(req.body)
    operario
    .save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

// get all operario
routes.get('/operarios', (req, res) => {
    operarioSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

// get a operario
routes.get('/operarios/:id', (req, res) => {
    const {id} = req.params;
    operarioSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

// uptade a operario
routes.put('/operarios/:id', (req, res) => {
    const {id} = req.params;
    const {cedula, nombreCompleto,telefono,direccion,email} = req.body;
    operarioSchema
    .updateOne({_id:id},{ $set:{cedula, nombreCompleto,telefono,direccion,email}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

// delete a operario 
routes.delete('/operarios/:id', (req, res) => {
    const {id} = req.params;
    operarioSchema
    .deleteOne({_id:id})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})
module.exports = routes