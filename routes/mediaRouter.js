const { Router } = require('express');
const jwt = require('../helper/jwt');

const {
    crearMedia,
    consultarMedias,
    consultarMediaID,
    editarMediaID,
    eliminarMediaID
} = require('../controllers/mediaController');

const router = Router();

// Endpoint para crear Media
router.post('/', jwt.autenticationToken, jwt.check(['Administrador']), crearMedia);

// Endpoint para consultar todas las Medias
router.get('/', jwt.autenticationToken, jwt.check(['Administrador', 'Docente']), consultarMedias);

// Endpoint para consultar Media por ID
router.get('/:id', jwt.autenticationToken, jwt.check(['Administrador', 'Docente']), consultarMediaID);

// Endpoint para editar Media por ID
router.put('/:id', jwt.autenticationToken, jwt.check(['Administrador']), editarMediaID);

// Endpoint para eliminar Media por ID
router.delete('/:id', jwt.autenticationToken, jwt.check(['Administrador']), eliminarMediaID);

module.exports = router;