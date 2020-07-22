const express = require('express')
const routes = require('./routes')

const app = express()
app.use(express.json())

require('./app/config/database')

app.use(routes)

module.exports = app
