const { Router } = require('express')
const jwt = require('../helper/jwt');

const { 
    crearProductora,
    consultarProductora,
    consultarProductoraID,
    editarProductoraID
 } = require('../controllers/productoraController')

const router = Router()

//endpoint crear productora
router.post('/', jwt.autenticationToken, jwt.check(['Administrador']), crearProductora)

//endpoint consultar productora
router.get('/', jwt.autenticationToken, jwt.check(['Administrador', 'Docente']), consultarProductora)

//endpoint consultar productora por ID
router.get('/:id', jwt.autenticationToken, jwt.check(['Administrador', 'Docente']), consultarProductoraID)

//endpoint editar productora por ID
router.put('/:id', jwt.autenticationToken, jwt.check(['Administrador']), editarProductoraID)



module.exports = router