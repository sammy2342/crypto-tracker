const User = require('../../models/user')
const Profile = require('../../models/Profile')
const Coin = require('../../models/coin')
const axios = require('axios')

module.exports = { 
    // index, 
    create,
    newCoin
}

// async function index(req, res) {
//     console.log(req.user, 'this is req.body')
//     try {
//         const profile = await Profile.find({})
//         console.log(profile)
//         res.json(profile)
//     } catch(err) {
//         console.log(err)
//         res.status(400).json(err)
//     }
// }

async function create(req, res) { 
    console.log(req.body, 'this is for req body')
    console.log(req.user, 'this is for the eqr USER')
    console.log(req.body.username, 'this is for the username ')
    try { 
        // req.body.id === req.user._id
        req.body.username === req.user
        const profile = await Profile.create(req.body)
        res.json(profile)
    } catch(err) {
        console.log(err)
        res.status(400).json(err)
    }
}

async function newCoin(req, res) { 
    console.log(req.params, 'this is for the id')
    console.log(req.user, 'this is for the user in the create funtoin')
    try {   
        if(req.body.username === req.user.name) {
            const profile = Profile.findById(req.params.id)
            console.log(profile)
            profile.watchList.push(req.body)
            profile.save()
        }

    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}



