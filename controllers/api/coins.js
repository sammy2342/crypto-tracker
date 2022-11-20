const Coin = require('../../models/coin')
const coinKey = process.env.API_KEY
const axios = require('axios')


module.exports = {
    index,
}

async function index(req, res) { 
    const coin = await axios.get(coinKey)
    coin.find({})
    res.json(coin)
}