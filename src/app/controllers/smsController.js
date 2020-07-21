const conversionService = require('../services/conversionService')

let smsController = {
  async convertSms (req, res) {

    try {
      if(parseInt(req.body.sms[0])) {
        return res.status(200).json({
          resultado: await conversionService.convertNumberToText(req.body.sms)
        })
      }

      return res.status(200).json({ 
        resultado: await conversionService.convertTextToNumber(req.body.sms)
      })

    } catch (err) {
      return res.status(400).json({ error: 'An error has ocurred' })
    }
  }
}

module.exports = smsController
