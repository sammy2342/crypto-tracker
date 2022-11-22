const express = require('express')
const router = express.Router()
const coinsCtrl = require('../../controllers/api/coins')

router.get('/', coinsCtrl.index)

router.get('/:id', coinsCtrl.show)


module.exports = router