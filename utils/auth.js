const jwt = require('jsonwebtoken')
const { ACCESS_TOKEN_SECRET, ACCESS_TOKEN_EXPIRED_IN } = require('../constants')

const createAccessToken = (user) => {
  return jwt.sign(user, ACCESS_TOKEN_SECRET, {
    expiresIn: ACCESS_TOKEN_EXPIRED_IN
  })
}

module.exports = { createAccessToken }
