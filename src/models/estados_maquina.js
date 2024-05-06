const mongoose  = require("mongoose");
const maquina = require("./maquina");
const operarios = require("./operarios");
const lote_cafe = require("./lote_cafe");
const estadosMaquinaSchema = mongoose.Schema({
    estado:{
        type:Number,
        required:true
    },
    rotor:{
        type:String,
        required:true
    },
    temperatura:{
        type:String,
        required:true
    },
    temperatura_s1:{
        type:String,
        required:true
    },
    temperatura_s2:{
        type:String,
        required:true
    },
    temperatura_promedio:{
        type:String,
        required:true
    },
    fecha:{
        type:Date,
        required:true
    },
    maquina:{
        type:String,
        required:true
    },
    operarios:{
        type:String,
        required:true
    },
    lote_cafe:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('EstadosMaquina',estadosMaquinaSchema)