const Coin = require('../../models/coin')
const Profile = require('../../models/Profile')
const coinKey = process.env.API_KEY
const coinIdKey = process.env.API_ID_KEY
const axios = require('axios')
const coinChart = process.env.API_COIN_CHAR


module.exports = {
    index,
    show,
    // chart,
    create,
}


async function index(req, res) { 
    // console.log(req.user, 'this is for the req.user')
    try {
        const response = await axios.get(coinKey)
        // console.log({response})
        res.json(response.data)
    } catch(err) {
        console.log(err)
        res.status(400).json(err)
    }
}

async function show(req, res) { 
    // console.log(req.params.id, 'req params id')
    // console.log(req.user ,'this is for the id')
    try {
        // const coinId = Coin.findById
        const response = await axios.get(`${coinIdKey}/${req.params.id}`)
        const coinId = req.params.id
        const newCoinId = new Coin({coinId})
        // console.log(newCoinId, coinId)
        newCoinId.save()
        // console.log(coinIdKey)
        res.json(response.data)
    } catch(err) {
        console.log(err)
        res.status(400).json(err)
    }
}

// async function chart(req, res) { 
//     console.log(req.params.id)
//     try {
//         const response = await axios.get(`${coinIdKey}/${req.params.id}/${coinChart}`)
//         console.log(coinChart, 'thos os foro=---------')
//         console.log(response)
//     } catch(err) {
//         console.log(err)
//         res.status(400).json(err)
//     }
// }

async function create(req, res) { 
    console.log(req.user, 'this is user data in coins')
    console.log(req.params.coinId, 'this is id in the controllers coin.js')
    console.log(req.body, 'this is for req.body <--->')
    try { 
        const profile = await Profile.findById(req.user._id)

    } catch(err) {
        console.log(err)
        res.status(400).json(err)
    }
}
