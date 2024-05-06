const mongoose  = require("mongoose");
const tiposProcesos = require("./tiposProcesos");
const proveedores = require("./proveedores");
const variedad = require("./variedad");
const loteCafeSchema = mongoose.Schema({
    peso:{
        type:Number,
        required:true
    },
    proveedores:{
        type:String,
        required:true
    },
    tiposProcesos:{
        type:String,
        required:true
    },
    variedad:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('LoteCafe',loteCafeSchema)