const { Router } = require('express');

const {
    autenticacion
    } = require('../controllers/autenticacionController');

const router = Router();

router.post('/', autenticacion);


module.exports = router;