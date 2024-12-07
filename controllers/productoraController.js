const { request, response } = require("express")
const Productora = require('../models/productora')

const crearProductora = async (req = request, res = response) => {
    try {

        const { nombre, slogan, descripcion } = req.body;
        let data = {
            nombre,
            slogan,
            descripcion
        }

        const productora = new Productora(data)
        await productora.save()
        return res.status(201).json(productora)
        
    } catch (e) {
        console.log(e)
        return res.status(500).json({
            msj: 'No se pudo crear la productora'
        })
        
    }
}

const consultarProductora = async (req = request, res = response) => {
    try {

        const productoras = await Productora.find()
        return res.json(productoras)
        
    } catch (e) {
        console.log(e)
        return res.status(500).json({
            msj : 'No se pudo realizar la consulta'
        })
    }
}

const consultarProductoraID = async (req = request, res = response) => {
    try {

        const id = req.params.id

        const productoras = await Productora.findById(id)
        return res.json(productoras)
        
    } catch (e) {
        console.log(e)
        return res.status(500).json({
            msj : 'No se pudo realizar la consulta por ID'
        })
    }
}

const editarProductoraID = async (req = request, res = response) => {
    try {

        const { nombre, slogan, descripcion } = req.body;
        const id = req.params.id
        let data = {
            nombre,
            slogan,
            descripcion
        }

        data.fechaActualizacion = new Date()

        const productora = await Productora.findByIdAndUpdate(id, data, {new : true})
       
        return res.status(201).json(productora)
        
    } catch (e) {
        console.log(e)
        return res.status(500).json({
            msj: 'No se pudo crear la productora'
        })
        
    }
}

module.exports = {
    crearProductora,
    consultarProductora,
    consultarProductoraID,
    editarProductoraID
}

