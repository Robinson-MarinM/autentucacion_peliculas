const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({

    nombre: {
        type: String,
        required: [true, 'Nombre requerido']
    },

    email: {
        type: String,
        required: [true, 'Email requerido'],
        unique: true
    },

    estado: {
        type: String,
        required: true,
        default: ['Activo', 'Inactivo']
    },

    password: {
        type: String,
        required: true
    },

    rol: {
        type: String,
        required: true,
        enum: ['Administrador', 'Usuario', 'Docente']
    },

    fechaCreacion: {
        type: Date,
        default: new Date()
    },

    fechaActualizacion: {
        type: Date,
    }
});

module.exports = model('Usuario', UsuarioSchema);