const { ApolloError } = require('apollo-server-express');
const jwt = require('jsonwebtoken');

const {
  ACCESS_TOKEN_SECRET,
} = process.env;

class BaseModel {}

module.exports = BaseModel;
