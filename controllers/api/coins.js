const Coin = require('../../models/coin')
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
    console.log(req.user, 'this is for the req.user')
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
    console.log(req.params.id, 'req params id')
    console.log(req.user ,'this is for the id')
    try {
        // const coinId = Coin.findById
        const response = await axios.get(`${coinIdKey}/${req.params.id}`)
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
    console.log(req.user, 'this is user data')
    try { 
        const profile = console.log(req.user)
        console.log(profile, 'this is')
    } catch(err) {
        console.log(err)
        res.status(400).json(err)
    }
}
