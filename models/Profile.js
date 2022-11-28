const { default: axios } = require('axios')
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const reviewSchema = new Schema({
    content: String, 
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true },
}, {
    timestamps: true
})

const watchListSchema = new Schema({ 
    title: String, 
    description: String,
    reviews: [reviewSchema],
}, {
    timestamps: true
})

const profileSchema = new Schema ({
    id: String, 
    username: String,
    // photo as an ice box future
    watchList: [watchListSchema]
}, { 
    timestamps: true
})

// const response = await axios.delete

// fetch('url.com', {headers: {method: 'DELETE'}})

module.exports = mongoose.model('Profile', profileSchema)