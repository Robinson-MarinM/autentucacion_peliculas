const { request, response } = require('express');
const Director = require('../models/director');

const crearDirector = async (req = request, res = response) => {
    try {
        const { nombre } = req.body;
        const data = {
        nombre,
        estado: true,
        fechaCreacion: new Date(),
        fechaActualizacion: new Date()
        };

        const director = new Director(data);
        await director.save();

        return res.status(201).json(director);

}   catch (e) {
    console.log(e);
    return res.status(500).json({ msj: 'Error al guardar' });
    }
};

const consultarDirectores = async (req = request, res = response) => {
    try {

        const directores = await Director.find();
        return res.json(directores);
    
    } catch (e) {

        console.log(e);
        return res.status(500).json({ msj: 'Error al consultar' });
        }
    };

const consultarDirectorID = async (req = request, res = response) => {
    try {

        const id = req.params.id;
        const director = await Director.findById(id);
        return res.json(director);
    
    } catch (e) {
        console.log(e);
        return res.status(500).json({ msj: 'Error al consultar' });
    }
};

const editarDirectorID = async (req = request, res = response) => {
    
    try {
        const { nombre } = req.body;
        const id = req.params.id;
        const data = {
        nombre,
        fechaActualizacion: new Date()
        };

        const director = await Director.findByIdAndUpdate(id, data, { new: true });
        return res.status(201).json(director);

    } catch (e) {
        console.log(e);
        return res.status(500).json({ msj: 'Error al guardar' });
    }
};

const eliminarDirectorID = async (req = request, res = response) => {
    
    try {
        const id = req.params.id;
        const director = await Director.findByIdAndDelete(id);
        return res.status(200).json(director);

    } catch (e) {
        console.log(e);
        return res.status(500).json({ msj: 'Error al eliminar' });
    }
};


module.exports = {
    crearDirector,
    consultarDirectores,
    consultarDirectorID,
    editarDirectorID,
    eliminarDirectorID
};