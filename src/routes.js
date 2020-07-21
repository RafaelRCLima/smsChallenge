const { Router } = require('express')
const smsController = require('../src/app/controllers/smsController')

const router = new Router()

router.post('/sms', smsController.convertSms)

module.exports = router