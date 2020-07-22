const mongoose = require('mongoose')
const Schema = mongoose.Schema
const AutoIncrement = require('mongoose-auto-increment')
AutoIncrement.initialize(mongoose.connection)

let smsSchema = new Schema({
    original: String,
    converted: String
},{ 
  timestamps: true 
})

smsSchema.plugin(AutoIncrement.plugin, {
  model: 'Sms',
  startAt: 1,
})

mongoose.model('Sms', smsSchema)

module.exports = mongoose.model('Sms')
