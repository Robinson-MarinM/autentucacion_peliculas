const {Schema, model } = require('mongoose')

const ProductoraSchema = Schema({
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
    slogan : {
        type: String
    },
    descripcion : {
        type: String
    },
})

module.exports = model('Productora', ProductoraSchema)