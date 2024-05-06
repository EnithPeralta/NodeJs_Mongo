const mongoose = require('mongoose')
const tiposProcesosSchema=mongoose.Schema({
    nombre:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('TiposProcesos', tiposProcesosSchema)
