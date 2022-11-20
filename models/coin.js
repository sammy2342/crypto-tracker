const mongoose = require('mongoose')

const Schema = mongoose.Schema

const coinSchema = new Schema ({
    logo: String, 
    price: Number, 
    marketCap: Number, 
    change: Number
}, { 
    timestamps: true
})

module.exports = mongoose.model('Coin', coinSchema)