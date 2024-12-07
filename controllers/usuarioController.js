const { request, response } = require('express');
const Usuario = require('../models/usuario');
const { json } = require('express/lib/response');
const bcrypt = require('bcryptjs');
const { use } = require('../app');

const createUsuario = async (req = request, res = response) => {
    try {
        const usuario = new Usuario(req.body)
        const userBD = Usuario.find(usuario)
        if (userBD.email === usuario.email){
            userExist = true
        }else{
            userExist = false
        }
        if(userExist){
            return res.status(400).json({error:"El usuario ya existe"})
        }
        usuario.estado = 'Activo';
        usuario.fechaCreacion = new Date();
        usuario.fechaActualizacion = new Date();
        usuario.password = await bcrypt.hash(usuario.password, 10);
        await usuario.save()
        res.status(201).json(usuario)
    } catch (error) {
        console.log(error)
        res.status(400).json({ msj: "Error al guardar" })
    }
}

const consultarUsuario = async (req = request, res = response) => {
    try {
        const usuarios = await Usuario.find();
        res.json(usuarios)
    } catch (error) {
        res.status(500),json({msj: "Error al consultar"})
    }
}

const consultarUsuarioID = async (req = request, res = response) => {
    try {
        const usuario = await Usuario.findById(req.params.id)
        if (!usuario) return res.status(404).json({msj: "Usuario no encontrado"})
    } catch (error) {
       res.status(500),json({msj: "Error al consultar"}) 
    }

}

module.exports = {
    createUsuario,
    consultarUsuario,
    consultarUsuarioID,
    
};