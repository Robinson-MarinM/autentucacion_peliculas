const { request, response } = require('express');
const Usuario = require('../models/usuario');
const { json } = require('express/lib/response');
const bcrypt = require('bcryptjs');
const jwt = require('../helper/jwt');
const { use } = require('../app');

const autenticacion = async (req = request, res = response) => {
    try {
        const usuario = new Usuario(req.body)
        const userBD = await Usuario.findOne({ email:usuario.email});
        if (userBD.email === usuario.email){
            userExist = true
        }else{
            userExist = false
        }
        if(!userExist){
            return res.status(400).json({error:"El usuario no existe"})
        }

        const ismatch = await bcrypt.compare(usuario.password, userBD.password);
        if(!ismatch){
            return res.status(400).json({ error:"La contraseña no coincide"})
        }
        const token = jwt.generarJWT(userBD);
        res.status(200).json({
            message:"autenticacion exitosa", token
        })

    } catch (error) {
        console.log(error)
        res.status(400).json({ msj: "Error al autenticar" })
    }
}



module.exports = {
    autenticacion
};