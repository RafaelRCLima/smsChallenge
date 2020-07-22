const Mongoose = require('mongoose')

const mongooseOptions = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
}

Mongoose.connect('mongodb://localhost:27017/avaliacaoSMS', mongooseOptions)

module.exports = Mongoose