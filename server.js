const app = require('./app')

app.set('port', 4000)

app.get('*', (req, res) => {
    return res.json({msj: 'ok!'});
})

app.listen(app.get('port'), () => {
    console.log(`iniciando en el puerto: ${app.get('port')}`)
})