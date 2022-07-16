const express = require('express')

const sequelize = require('./config/database')

const Routes = require('./routes/index.routes')

const app = express()

const port = process.env.POT || 5000

app.use(express.json());

sequelize.sync().then(()=> console.log('banco de dados conectado com sucesso!'))

app.use('/tasks',Routes)

app.get('/',(req, res)=>{
    res.send('salut le monde!')
})

app.listen(port,()=>{
    console.log(`servidor rodando na porta ${port}`)
})