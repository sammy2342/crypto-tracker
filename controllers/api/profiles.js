const User = require('../../models/user')
const Profile = require('../../models/Profile')
const Coin = require('../../models/coin')
const axios = require('axios')


module.exports = { 
    createProfile, 
    create,
    getProfile, 
    delete: deleteCoinInWatchlist,
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




async function getProfile(req, res) { 
    console.log(req.user)

    try {   
        const findProfile = await Profile.findOne({ username: req.user._id})
        res.json(findProfile)
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}


async function deleteCoinInWatchlist(req, res) { 
    console.log(req.body)
    console.log(req.params)
    try {
        const profile = await Profile.findOne({ username: req.user._id})
        console.log(profile)
        profile.watchList.splice(profile.watchList.indexOf(req.params.coinId), 1);
        profile.save();
        res.json(profile)
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}


