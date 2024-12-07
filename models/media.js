const {Schema, model } = require('mongoose')

const MediaSchema = Schema({
    serial : {
        type: String,
        unique: [true, 'serial ya existe'],
        require: [true, 'serial requerido']
    },
    titulo : {
        type: String,
        require: [true, ' nombre requerido'],

    },
    sinopsis : {
        type: String
    },
    estado: {
        type: Boolean
    },
    url : {
        type: String,
        require: [true, 'se requiere url']
    },
    imagenPortada: {
        type: String
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion : {
        type: Date,
        default: new Date()
    },
    fechaEstreno: {
        type: Date,
    },
    Genero : {
        type: Schema.Types.ObjectId,
        ref: 'Genero',
        require: true
    },
    Director: {
        type: Schema.Types.ObjectId,
        ref: 'Director',
        require: true
    },
    Productora: {
        type: Schema.Types.ObjectId,
        ref: 'Productora',
        require: true
    },
    Tipo: {
        type: Schema.Types.ObjectId,
        ref: 'Tipo',
        require: true
    }
})

module.exports = model('Media', MediaSchema)