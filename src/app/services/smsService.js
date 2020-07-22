const Sms = require('../model/sms')

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
  }
}

module.exports = smsService