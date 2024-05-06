const express = require("express")
const proveedoresSchema = require("../models/proveedores")
const routes = express.Router();

// Create proveedor
routes.post('/proveedores',(req,res)=>{
    const proveedor = proveedoresSchema(req.body)
    proveedor
    .save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

// get all proveedor
routes.get('/proveedores',(req,res)=>{
    proveedoresSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

// // get a operario
routes.get('/proveedores/:id', (req, res) => {
    const {id} = req.params;
    proveedoresSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

//uptade a proveedor
routes.put('/proveedores/:id',(req,res)=>{
    const {id} = req.params;
    const {cedula, nombreCompleto,telefono,direccion,email} = req.body;
    proveedoresSchema
    .updateOne({_id:id},{ $set:{cedula, nombreCompleto,telefono,direccion,email}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

// delete a proveedor
routes.delete('/proveedores/:id',(req,res)=>{
    const {id} = req.params;
    const {cedula, nombreCompleto,telefono,direccion,email} = req.body;
    proveedoresSchema
    .deleteOne({_id:id},{ $set:{cedula, nombreCompleto,telefono,direccion,email}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))  
})

module.exports = routes