const { Router } = require('express')
const smsController = require('../src/app/controllers/smsController')

const router = new Router()

router.post('/convertSms', smsController.convertSms)
router.get('/listSms', smsController.listSms)

module.exports = router