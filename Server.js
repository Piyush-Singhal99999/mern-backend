const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes/ToDoRoute')

require('dotenv').config()

const app = express()
const PORT = process.env.port || 5000

app.use(express.json())
app.use(cors())

mongoose
.connect('mongodb+srv://piyushsinghal99999:quYkEsYWa3Esf4ZX@cluster0.xojiavb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=> console.log('Connected To MongoDB...'))
.catch((err) => console.log(err))

app.use(routes)

app.listen(PORT, () => console.log(`Listening on: ${PORT}`))
