const express = require('express')
const app = express()
const configureDB = require('./config/db')
const addressLocator = require('./app/controllers/address-locator')
require('dotenv').config()
const port = 4100
const cors = require('cors')
configureDB()

app.use(cors())
app.use(express.json())


app.get('/api/search', addressLocator.search)

app.listen(port, () => {
    console.log('connected to server port', port)
})