const jwt = require('jsonwebtoken');
const usuario = require('../models/usuario');

const generarJWT = (usuario) => {
    const payload = {
        _id: usuario._id, nombre: usuario.nombre, email: usuario.email, rol: usuario.rol
    }
    const token = jwt.sign(payload, '12345', { expiresIn: '1h' })
    return token
}

function autenticationToken(req, res, next) {
    const authHeader = req.headers['authorization'];

    const token = authHeader.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Token no proporcionado' });

    const secret = '12345';
    jwt.verify(token, secret, (err, user) => {
        if (err) return res.status(403).json({ error: 'Token inválido o expirado' });

        req.user = user;
        next();
    });
}

function check(allowedRoles) {
    return (req, res, next) => {
        if (!req.user || !allowedRoles.includes(req.user.rol)) {
            return res.status(403).json({ error: 'Acceso denegado: No tienes permisos suficientes' });
        }
        next();
    };
}

module.exports = {
    generarJWT,
    check,
    autenticationToken
}
