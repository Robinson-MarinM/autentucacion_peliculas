const {Schema, model } = require('mongoose')

const DirectorSchema = Schema({
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

    }
})

module.exports = model('Director', DirectorSchema)