const { request, response } = require('express');
const Media = require('../models/media');
const genero = require('../models/genero');

// Crear Media
const crearMedia = async (req = request, res = response) => {
    try {
        const { serial, titulo, sinopsis, url, estado, imagenPortada, fechaEstreno, Genero, Director, Productora, Tipo } = req.body
        
        let data = { 
            serial, 
            titulo, 
            sinopsis, 
            url,
            estado, 
            imagenPortada, 
            fechaEstreno, 
            Genero, 
            Director, 
            Productora, 
            Tipo };

        const media = new Media(data);
        await media.save();

        return res.status(201).json(media);

    } catch (e) {
        console.log(e);
        return res.status(500).json({ msj: 'Error al guardar Media' });
    }
};

// Consultar todas las Medias
const consultarMedias = async (req = request, res = response) => {
    try {
        const medias = await Media.find().populate('Genero Director Productora Tipo');
        return res.json(medias);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ msj: 'Error al consultar Medias' });
    }
};

// Consultar Media por ID
const consultarMediaID = async (req = request, res = response) => {
    try {
        const id = req.params.id;
        const media = await Media.findById(id).populate('Genero Director Productora Tipo');
        
        return res.json(media);
        
    } catch (e) {
        console.log(e);
        return res.status(500).json({ msj: 'Error al consultar Media por ID' });
    }
};

// Editar Media por ID
const editarMediaID = async (req = request, res = response) => {
    try {
        const { serial, titulo, sinopsis, url, estado, imagenPortada, fechaEstreno, Genero, Director, Productora, Tipo } = req.body;
        const id = req.params.id;

        let data = { 
            serial, 
            titulo, 
            sinopsis, 
            url, 
            estado,
            imagenPortada, 
            fechaEstreno, 
            Genero, 
            Director, 
            Productora, 
            Tipo };
        
            data.fechaActualizacion = new Date();

        const media = await Media.findByIdAndUpdate(id, data, { new: true }).populate('Genero Director Productora Tipo');

        return res.status(201).json(media);

    } catch (e) {
        console.log(e);
        return res.status(500).json({ msj: 'Error al editar Media' });
    }
};

// Eliminar Media por ID
const eliminarMediaID = async (req = request, res = response) => {
    try {
        const id = req.params.id;
        
        const media = await Media.findByIdAndDelete(id);

        if (!media) {
            return res.status(404).json({ msj: 'Media no encontrada' });
        }

        return res.json({ msj: 'Media eliminada correctamente' });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ msj: 'Error al eliminar Media' });
    }
};

module.exports = {
    crearMedia,
    consultarMedias,
    consultarMediaID,
    editarMediaID,
    eliminarMediaID
};