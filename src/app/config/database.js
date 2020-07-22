const Mongoose = require('mongoose')

const mongooseOptions = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
}

Mongoose.connect(
  process.NODE_ENV === 'test' ? 'mongodb://localhost:27017/test' : 
  'mongodb://localhost:27017/avaliacaoSMS', 
  mongooseOptions
  )

module.exports = Mongoose
