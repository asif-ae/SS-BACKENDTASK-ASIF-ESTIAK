const jwt = require('jsonwebtoken')
const { ACCESS_TOKEN_SECRET } = require('../constants')

const authenticate = async (req, res, next) => {
  const token = req?.headers?.authorization?.split(' ')?.[1] || ""

  try {
    const verification = jwt.verify(token, ACCESS_TOKEN_SECRET)
    req.verifiedUser = verification
    // console.log('Verification succeed!', verification)
    next()
  } catch (error) {
    // console.log('Verification failed!')
    next()
  }
}

module.exports = { authenticate }
