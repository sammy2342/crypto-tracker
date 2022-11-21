const Coin = require('../../models/coin')
const coinKey = process.env.API_KEY
const axios = require('axios')


module.exports = {
    index,
}

const a = {}

const b = {}

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