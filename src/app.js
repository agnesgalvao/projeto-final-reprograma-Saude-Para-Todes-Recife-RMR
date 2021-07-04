const express = require('express');
const cors = require('cors')


const app = express();
app.use(express.json())
app.use(cors())
const db = require('./data/data')
const usuarios = require('./routes/usuarios_routes')
db.connect()


const servicos = require('./routes/servicos_routes')
const ambulatorios = require('./routes/ambulatorios_routes')
const especialidadesBaixoCusto = require('./routes/especialidadeBaixoCustoRoutes')
const index = require('./routes/index')


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*") 
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
    })

app.use('/', index)
app.use('/usuarios', usuarios)
app.use('/ambulatorios', ambulatorios)
app.use('/especialidadesBaixoCusto', especialidadesBaixoCusto)
app.use('/servicos', servicos)





module.exports = app 