const express = require('express')
const router = express.Router()
const profileCtrl = require('../../controllers/api/profiles')

// router.get('/', profileCtrl.index)
router.post('/', profileCtrl.create)

router.get('/:id', profileCtrl.newCoin)




module.exports = router