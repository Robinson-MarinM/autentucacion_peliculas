const {Schema, model } = require('mongoose')

const GeneroSchema = Schema({
    nombre : {
        type: String,
        require: [true, ' nombre requerido'],
        unique: true,

    },
    estado : {
        type: Boolean,
        default: true,

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

module.exports = model('Genero', GeneroSchema)