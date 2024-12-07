const { Router } = require('express')
const jwt = require('../helper/jwt');

const { 
    crearGenero,
    consultarGenero,
    consultarGeneroID,
    editarGeneroID } = require('../controllers/generoController')

const router = Router()

//GENERO
//se importa el endpoint crear
router.post('/', jwt.autenticationToken, jwt.check(['Administrador']), crearGenero)
//endpoint consultar todos
router.get('/', jwt.autenticationToken, jwt.check(['Administrador', 'Docente']), consultarGenero)
//endpoint consultar por ID
router.get('/:id', jwt.autenticationToken, jwt.check(['Administrador', 'Docente']), consultarGeneroID)
//endpoint actualizar por ID
router.put('/:id', jwt.autenticationToken, jwt.check(['Administrador']), editarGeneroID)


module.exports = router