const express = require('express')
const router = express.Router()
const coinsCtrl = require('../../controllers/api/coins')

router.get('/', coinsCtrl.index)


module.exports = router