const express = require("express")
const tiposProcesosSchema = require("../models/tiposProcesos")
const routes = express.Router()

// create tipos de procesos
routes.post('/tiposProcesos', (req, res) => {
    const tipoProceso = tiposProcesosSchema(req.body)
    tipoProceso
    .save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

// get all tipos of procesos
routes.get('/tiposProcesos', (req, res) => {
    tiposProcesosSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

// get a tipos of procesos
routes.get('/tiposProcesos/:id', (req, res) => {
    const {id} = req.params;
    tiposProcesosSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

// uptade a tipos of procesos
routes.put('/tiposProcesos/:id',(req,res)=>{
    const {id} = req.params;
    const {nombre} = req.body;
    tiposProcesosSchema
    .updateOne({_id:id},{$set:{nombre}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

// delete a tipos of procesos
routes.delete('/tiposProcesos/:id',(req,res)=>{
    const {id} = req.params;
    tiposProcesosSchema
    .deleteOne({_id:id})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})
module.exports = routes