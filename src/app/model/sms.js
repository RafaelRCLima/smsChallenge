const mongoose = require('mongoose')
const Schema = mongoose.Schema

let smsSchema = new Schema({
    sms: String
},{ 
  timestamps: true 
})

smsSchema.method('toClient', function () {
  const sms = {}

  return sms
})

mongoose.model('Sms', smsSchema)

module.exports = mongoose.model('Sms')
