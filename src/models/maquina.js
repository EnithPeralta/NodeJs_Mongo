const mongoose = require("mongoose")
const maquinaSchema = mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    nombre:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('Maquina', maquinaSchema)
