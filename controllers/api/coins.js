const Coin = require('../../models/coin')
const coinKey = process.env.API_KEY
const coinIdKey = process.env.API_ID_KEY
const axios = require('axios')


module.exports = {
    index,
    show,
}


async function index(req, res) { 
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
    try {
        // const coinId = Coin.findById
        const response = await axios.get(`${coinIdKey}/${req.params.id}`)
        console.log(coinIdKey)
        res.json(response.data)
    } catch(err) {
        console.log(err)
        res.status(400).json(err)
    }
}