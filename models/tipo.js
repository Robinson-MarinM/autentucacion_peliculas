const {Schema, model } = require('mongoose')

const TipoSchema = Schema({
    nombre : {
        type: String,
        require: [true, ' nombre requerido'],
        unique: true,
    },
    fechaCreacion : {
        type: Date,
        default: new Date()
    },
    fechaActualizacion : {
        type: Date,
    },
    descripcion : {
        type: String
    },
})

module.exports = model('Tipo', TipoSchema)