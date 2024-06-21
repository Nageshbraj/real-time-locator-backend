const mongoose = require('mongoose')
const { Schema, model} = mongoose

const addressSchema = new Schema({
    address: String,
    position: {
        lat: String,
        lng: String
    }
})

const Location = model('Location', addressSchema)

module.exports = Location