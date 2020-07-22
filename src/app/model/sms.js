const mongoose = require('mongoose')
const Schema = mongoose.Schema

let smsSchema = new Schema({
    original: String,
    converted: String
},{ 
  timestamps: true 
})

mongoose.model('Sms', smsSchema)

module.exports = mongoose.model('Sms')
