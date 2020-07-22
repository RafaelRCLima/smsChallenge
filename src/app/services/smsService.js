const Sms = require('../model/sms')
const moment = require('moment')

let smsService = {
  async create (originalSms, convertedSms) {
    const sms = await new Sms({
      original: originalSms,
      converted: convertedSms
    })
    await sms.save()
    return sms
  },

  async list (page) {
    return await Sms.find().limit(10).skip((page -1) * 10)
  },

  async listByDate (page, date) {
    
    const listOfSmsByDate = []

    const listOfSms = await Sms.find()
    const skip = (page - 1) * 10

    listOfSms.forEach(function (entry, index) {
      if (moment(date).format('DD/MM/YYYY') === moment(entry.createdAt).format('DD/MM/YYYY')) {
        if (skip <= index && listOfSmsByDate.length < 10){
          listOfSmsByDate.push(entry)
        }
      }
    })

    return listOfSmsByDate
  }
}

module.exports = smsService