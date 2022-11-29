const User = require('../../models/user')
const Profile = require('../../models/Profile')
const Coin = require('../../models/coin')
const axios = require('axios')

module.exports = { 
    createProfile, 
    create,
    newCoin
}

async function createProfile(req, res) {
    console.log(req.user.name, 'this is req.user')
    console.log(req.body)
    try {
        Profile.username = req.user.name

    } catch(err) {
        console.log(err)
        res.status(400).json(err)
    }
}

async function create(req, res) { 
    console.log(req.params.coinId, 'this is for d---')
    console.log(req.user._id, '<-------')
    try { 
        
        const myProfile = await Profile.findOne({ username: req.user._id})
        console.log(myProfile, 'this is for the my profile')
        console.log(req.params.coinId)
        if(myProfile) {
            myProfile.watchList.push(req.params.coinId)
            console.log(myProfile, 'profile ---<<<< exits')
            await myProfile.save()
            res.json(myProfile)
        } else { 
            const profile = new Profile({  username: req.user._id })
            profile.watchList.push(req.params.coinId)
            console.log(profile, 'new profile ---<<<<<')
            await profile.save()
            res.json(profile)
        }
        // console.log(profile, 'profile ---<<<<<')
        // profile.watchList.push(req.params.coinId)
        // profile.save()
        // res.json(profile)
    } catch(err) {
        console.log(err)
        res.status(400).json(err)
    }
}

async function newCoin(req, res) { 
    console.log(req.body)
    console.log(req.params, 'this is for the id')
    console.log(req.user, 'this is forr the userr')
    // console.log(req.user, 'this is for the user in the create funtoin')
    try {   
        if(req.body.username === req.params.id) {
            const profile = await Profile.findById({_id: req.params._id}).populate('Coin')
            console.log(profile)
            // console.log(profile, 'this is for the profipe')
            profile.watchList.push(req.body)
            profile.save()
        }

    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}



