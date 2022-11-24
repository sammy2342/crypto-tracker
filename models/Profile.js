const mongoose = require('mongoose')

const Schema = mongoose.Schema

const profileSchema = new Schema ({
    id: String, 
    username: String,
    watchList: [watchListSchema]
}, { 
    timestamps: true
})

const watchListSchema = new Schema({ 
    title: String, 
    description: String,
    reviews: [reviewSchema]
})

const reviewSchema = new Schema({
    content: String, 
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true },
    username: String,
})

module.exports = mongoose.model('Profile', profileSchema)