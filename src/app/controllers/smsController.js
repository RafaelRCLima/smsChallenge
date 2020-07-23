const conversionService = require('../services/conversionService')
const smsService = require('../services/smsService')
const Yup = require('yup')
const moment = require('moment')

let smsController = {

  async convertSms (req, res) {
    try {

      let schema = Yup.object().shape({
        sms: Yup.string().required()
      });

      if (!(await schema.isValid(req.body))) {
        return res.status(400).json({ error: "Please insert a sms text or number" })
      }
      
      if(parseInt(req.body.sms[0]) || parseInt(req.body.sms.toString()[0])) {

        const result = await conversionService.convertNumberToText(req.body.sms.toString())
        
        if (result.length > 255) return res.status(400).json({ 
          error: 'Please insert 255 or less caracters'
        })

        if (result.length < 1) return res.status(400).json({
          error: "The number '1' isn't allowed, please insert a number sequence without it."
        })

        const { original, converted, createdAt } = await smsService.create(req.body.sms, result)
        
        return res.status(200).json({
          original,
          converted,
          date: moment(createdAt).format('DD/MM/YYYY')
        })
      }

      if (req.body.sms.length > 255) return res.status(400).json({ 
        error: 'Please insert 255 or less caracters'
      })

      const result = await conversionService.convertTextToNumber(req.body.sms)

      const { original, converted, createdAt } = await smsService.create(req.body.sms, result)

      return res.status(200).json({
        original,
        converted,
        date: moment(createdAt).format('DD/MM/YYYY')
      })

    } catch (err) {
      return res.status(500).json({ error: 'An intern error has ocurred' })
    }
  },

  async listSms (req, res) {

    try{
      const { page = 1, date } = req.query

      if (date) {

        const listOfSms = await smsService.listByDate(page, date)
        const finalListOfSms = await smsService.formatSmsList(listOfSms)

        return res.status(200).json(finalListOfSms)
      }

      const listOfSms = await smsService.list(page)
      const finalListOfSms = await smsService.formatSmsList(listOfSms)

      return res.status(200).json(finalListOfSms)
      
    } catch (err) {
      return res.status(500).json({ error: 'An intern error has ocurred' })
    }
    
  }
}

module.exports = smsController
