const mongoose = require('mongoose')

const Schema = mongoose.Schema

const coinSchema = new Schema ({
    id: String, 
    logo: String,
}, { 
    timestamps: true
})

module.exports = mongoose.model('Coin', coinSchema)