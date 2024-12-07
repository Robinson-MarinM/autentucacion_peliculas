const { request, response } = require('express')
const Genero = require('../models/genero')

const crearGenero = async (req = request, res = response) => {
    
    try {

        const { nombre, descripcion } = req.body

        let data = {
            nombre,
            descripcion
        }

        //se puede personalizar el error si el nombre ya existe
        const genero = new Genero(data)

        await genero.save()

        return res.status(201).json(genero)
        
    } catch (e) {
        console.log(e)
        return res.status(500).json({
            msj: 'Error al guardar'
        })
    }
}

const consultarGenero = async (req = request, res = response) => {
    try {

        const generos = await Genero.find()
    
        return res.json(generos)

    } catch(e) {
        console.log(e)
        return res.status(500).json({
            msj: 'Error al consultar'
        })
    }
}

const consultarGeneroID = async (req = request, res = response) => {
    try {

        const id = req.params.id

        const genero = await Genero.findById(id)
        return res.json(genero)

    } catch (e) {
        console.log(e)
        return res.status(500).json({
            msj: 'Error al consultar'
        })
    }

}

const editarGeneroID = async (req = request, res = response) => {

    try {
        const { nombre, descripcion} = req.body
        const id = req.params.id
        let data = {
            nombre,
            descripcion
        }
        data.fechaActualizacion = new Date()
        // se puede personalizar el error si el nombre ya existe
        const genero = await Genero.findByIdAndUpdate(id, data, {new : true})
    
        return res.status(201).json(genero)

    } catch(e) {
        console.log(e)
        return res.status(500).json({
            msj: 'Error al guardar'
        })
    }
}


module.exports = {
    crearGenero,
    consultarGenero,
    consultarGeneroID,
    editarGeneroID
}
