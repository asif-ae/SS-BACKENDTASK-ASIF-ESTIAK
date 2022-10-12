const dotenv = require('dotenv')

dotenv.config()

module.exports = {
  PORT,
  DB_URI
} = process.env;
