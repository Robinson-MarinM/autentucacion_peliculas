const { Router } = require('express');
const jwt = require('../helper/jwt');

const {
    crearDirector,
    consultarDirectores,
    consultarDirectorID,
    editarDirectorID,
    eliminarDirectorID
    } = require('../controllers/directorController');

const router = Router();

router.post('/', jwt.autenticationToken, jwt.check(['Administrador']), crearDirector);
router.get('/', jwt.autenticationToken, jwt.check(['Administrador', 'Docente']), consultarDirectores);
router.get('/:id', jwt.autenticationToken, jwt.check(['Administrador', 'Docente']), consultarDirectorID);
router.put('/:id', jwt.autenticationToken, jwt.check(['Administrador']), editarDirectorID);
router.delete('/:id', jwt.autenticationToken, jwt.check(['Administrador']), eliminarDirectorID);

module.exports = router;