const { Router } = require('express')
const smsController = require('../src/app/controllers/smsController')

const router = new Router()

router.post('/sms', smsController.convertSms)
router.get('/sms', smsController.listSms)

module.exports = router