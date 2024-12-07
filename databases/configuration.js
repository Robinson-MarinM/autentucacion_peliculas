const mongoose = require('mongoose');

const mongoConn = async () => {
    try {
        await mongoose.connect('mongodb+srv://admin:jaider1990@cluster0.yq5qj.mongodb.net/', {
            dbName: 'peliculas'
        })
        console.log('se conecto correctamente!');
    }catch(e) {
        console.log('error', e)
        throw new Error('Error de conexión')
    }
}

module.exports = { mongoConn }