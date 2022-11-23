const mongoose = require('mongoose')

const Schema = mongoose.Schema

const watchListSchema = new Schema ({
    logo: String, 
    price: Number, 
    marketCap: Number, 
    change: Number
}, { 
    timestamps: true
})

module.exports = mongoose.model('WatchList', coinSchema)