const { default: mongoose } = require("mongoose");
const { DB_URI } = require('../constants')

const connectDB = async () => {
  const conn = await mongoose.connect(DB_URI)
  console.log('Database connected!');
}

module.exports = { connectDB }
