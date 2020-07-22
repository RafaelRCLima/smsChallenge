const conversionService = require('../services/conversionService')
const Sms = require('../model/sms')

let smsController = {
  async convertSms (req, res) {
    try {
      if(parseInt(req.body.sms[0])) {
        const result = await conversionService.convertNumberToText(req.body.sms)
        
        return res.status(200).json(result)
      }

      const result = await conversionService.convertTextToNumber(req.body.sms)

      return res.status(200).json(result)

    } catch (err) {
      return res.status(400).json({ error: 'An error has ocurred' })
    }
  }
}

module.exports = smsController
