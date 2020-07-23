const Sms = require('../model/sms')
const moment = require('moment')

let smsService = {
  async create (originalSms, convertedSms) {
    const sms = await Sms.create({
      original: originalSms,
      converted: convertedSms
    })
    return sms
  },

  async list (page) {
    return await Sms.find().limit(10).skip((page -1) * 10)
  },

  async listByDate (page, date) {
    
    const listOfSmsByDate = []

    const listOfSms = await Sms.find()

    listOfSms.forEach(function (entry) {
      if (moment(date).format('DD/MM/YYYY') === moment(entry.createdAt).format('DD/MM/YYYY')) {
        listOfSmsByDate.push(entry)
      }
    })

    const listToSend = []
    const skip = (page - 1) * 10

    listOfSmsByDate.forEach(function (entry, index) {
      if (skip <= index && listOfSmsByDate.length < 10){
        listToSend.push(entry)
      }
    })

    return listToSend
  }
}

module.exports = smsService