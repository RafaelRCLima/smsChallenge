const mongoose = require('mongoose')
const Schema = mongoose.Schema
const AutoIncrement = require('mongoose-auto-increment')
AutoIncrement.initialize(mongoose.connection)
const moment = require('moment')

let smsSchema = new Schema({
    original: String,
    converted: String
},{ 
  timestamps: true 
})

smsSchema.plugin(AutoIncrement.plugin, {
  model: 'Sms',
  startAt: 1
})

smsSchema.method('toClient', function () {
  const sms = {}

  sms._id = this._id
  sms.original = this.original
  sms.converted = this.converted
  sms.date = moment(this.createdAt).format('DD/MM/YYYY')

  return sms
})


mongoose.model('Sms', smsSchema)

module.exports = mongoose.model('Sms')
