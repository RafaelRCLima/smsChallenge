const Mongoose = require('mongoose')
const AutoIncrement = require('mongoose-auto-increment')

const mongooseOptions = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
}

Mongoose.connect(
  process.env.NODE_ENV === 'test' ? 'mongodb://localhost:27017/test' : 
  'mongodb://localhost:27017/avaliacaoSMS', 
  mongooseOptions
)

AutoIncrement.initialize(Mongoose.connection)

module.exports = Mongoose
