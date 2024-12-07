const { Router } = require('express');
const jwt = require('../helper/jwt');

const {
    crearTipo,
    consultarTipos,
    consultarTipoID,
    editarTipoID,
    eliminarTipoID
    } = require('../controllers/tipoController');

const router = Router();

router.post('/', jwt.autenticationToken, jwt.check(['Administrador']), crearTipo);
router.get('/', jwt.autenticationToken, jwt.check(['Administrador', 'Docente']), consultarTipos);
router.get('/:id', jwt.autenticationToken, jwt.check(['Administrador', 'Docente']), consultarTipoID);
router.put('/:id', jwt.autenticationToken, jwt.check(['Administrador']), editarTipoID);
router.delete('/:id', jwt.autenticationToken, jwt.check(['Administrador']), eliminarTipoID);

module.exports = router;