const { Router } = require('express');

const {
    createUsuario,
    consultarUsuario,
    consultarUsuarioID
    } = require('../controllers/usuarioController');

const router = Router();

router.post('/', createUsuario);
router.get('/', consultarUsuario);
router.get('/:id', consultarUsuarioID);
/*router.put('/:id', editarTipoID);
router.delete('/:id', eliminarTipoID);*/

module.exports = router;