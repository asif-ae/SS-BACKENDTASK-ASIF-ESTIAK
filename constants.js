const dotenv = require('dotenv')

dotenv.config()

module.exports = {
  PORT,
  DB_URI,
  ACCESS_TOKEN_SECRET,
  ACCESS_TOKEN_EXPIRED_IN,
  REFRESH_TOKEN_SECRET,
  REFRESH_TOKEN_EXPIRED_IN
} = process.env;
