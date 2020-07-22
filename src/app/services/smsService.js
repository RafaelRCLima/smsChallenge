const Sms = require('../model/sms')

let smsService = {
  async create (value) {
    const sms = await new Sms({
      sms: value
    })
    await sms.save()
  }
}

module.exports = smsService