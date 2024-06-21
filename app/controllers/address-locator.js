const axios = require('axios')
const Location = require('../models/location-model')
const addressLocator = {}


addressLocator.search = async (req,res) => {
    const body = req.query.address
    try {
        const response = await axios.get(`http://api.opencagedata.com/geocode/v1/json?q=${body}&key=20816ca1679a4e17a8b39ce9a6657549`)
        const obj = {
            address: response.data.results[0].formatted,
            position: {
                lat: response.data.results[0].geometry.lat,
                lng: response.data.results[0].geometry.lng
            }
        }
        const newLocation = await Location.create(obj)
        return res.status(201).json(newLocation)
    } catch(err){
        res.status(500).json({errors: 'something went wrong'})
    }
}

module.exports = addressLocator