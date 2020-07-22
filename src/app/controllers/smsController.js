const conversionService = require('../services/conversionService')
const smsService = require('../services/smsService')

let smsController = {
  async convertSms (req, res) {
    try {
      if(parseInt(req.body.sms[0])) {
        const result = await conversionService.convertNumberToText(req.body.sms)

        smsService.create(req.body.sms, result)
        
        return res.status(200).json(result)
      }

      const result = await conversionService.convertTextToNumber(req.body.sms)

      smsService.create(req.body.sms, result)

      return res.status(200).json(result)

    } catch (err) {
      return res.status(400).json({ error: 'An error has ocurred' })
    }
  },

  async listSms (req, res) {
    try{
      const { page = 1 } = req.query

      const listOfSms = await smsService.list(page)

      return res.status(200).json(listOfSms)
      
    } catch (err) {
      return res.status(400).json({ error: 'It was not possible to find any data' })
    }
    
  }
}

module.exports = smsController
