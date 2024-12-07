const dotenv = require('dotenv')
const express = require('express')
const app = express()
dotenv.config()
const { mongoConn } = require('./databases/configuration')
mongoConn()

const cors = require('cors')

app.use(express.urlencoded({extended : false}))
app.use(express.json())
app.use(cors({
    origin : '*'
}))

//genero
const generos = require('./routes/generoRoute') //importa la ruta
app.use('/api/v1/generos', generos) //Usa ruta

//productora
const productoras = require('./routes/productoraRoute')
app.use('/api/v1/productoras', productoras)

//director
const directores = require('./routes/directorRoute')
app.use('/api/v1/directores', directores)

//tipo
const tipos = require('./routes/tipoRoute')
app.use('/api/v1/tipos', tipos)

// media
const medias = require('./routes/mediaRouter');
app.use('/api/v1/medias', medias);

// Manejo de rutas no encontradas
app.get('*', (req, res) => {
    return res.status(400).json({ msj: 'No encontrado' });
});

const usuarios = require('./routes/usuarioRoute');
app.use('/api/v1/usuarios',usuarios);

const autenticaciones = require('./routes/autenticacionRoute');
app.use('/api/v1/autenticacion',autenticaciones);

module.exports = app