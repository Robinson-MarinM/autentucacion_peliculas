const { request, response } = require('express');
const Tipo = require('../models/tipo');

const crearTipo = async (req = request, res = response) => {
    try {
        
        const { nombre, descripcion } = req.body;
        
        const data = {
            nombre,
            fechaCreacion: new Date(),
            fechaActualizacion: new Date(),
            descripcion
        };

        const tipo = new Tipo(data);
        await tipo.save();

        return res.status(201).json(tipo);

    } catch (e) {
        console.log(e);
        return res.status(500).json({ msj: 'Error al crear Tipo' });
    }
};

const consultarTipos = async (req = request, res = response) => {
    try {
        const tipos = await Tipo.find();
        return res.json(tipos);

    } catch (e) {
        console.log(e);
        return res.status(500).json({ msj: 'Error al consultar Tipo' });
    }
};

const consultarTipoID = async (req = request, res = response) => {
    try {
        const id = req.params.id;
        const tipo = await Tipo.findById(id);
        return res.json(tipo);

    } catch (e) {
        console.log(e);
        return res.status(500).json({ msj: 'Error al consultar Tipo por ID' });
    }
};

const editarTipoID = async (req = request, res = response) => {
    try {

        const { nombre, descripcion } = req.body;
        const id = req.params.id;
       
        const data = {
            nombre,
            fechaActualizacion: new Date(),
            descripcion
        };

        const tipo = await Tipo.findByIdAndUpdate(id, data, { new: true });
        return res.status(201).json(tipo);
    
    } catch (e) {
        console.log(e);
        return res.status(500).json({ msj: 'Error al actualizar Tipo' });
    }
};

const eliminarTipoID = async (req = request, res = response) => {
    try {
        const id = req.params.id;
        const tipo = await Tipo.findByIdAndDelete(id);
        return res.status(200).json(tipo);

    } catch (e) {
        console.log(e);
        return res.status(500).json({ msj: 'Error al eliminar Tipo' });
    }
};

module.exports = {
    crearTipo,
    consultarTipos,
    consultarTipoID,
    editarTipoID,
    eliminarTipoID
};