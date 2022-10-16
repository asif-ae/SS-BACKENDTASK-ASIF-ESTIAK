const {gql} = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: String!
    firstName: String!
    lastName: String!
    username: String
    email: String
    password: String
    image: String
    isAuthenticated: Boolean
  }

  input LoginUserInput {
    username: String!
    password: String!
  }

  input CreateUserInput {
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    password: String!
    image: String
  }

  input UserSignInInput {
    username: String!
    password: String!
  }

  type Jwt {
    accessToken: String
  }

  type CreateUserOutput {
    id: String
  }

  # extend type Query {}

  extend type Mutation {
    login(userData: LoginUserInput!): Jwt
    createUser(userData: CreateUserInput!): CreateUserOutput!
    makeAuthorizedUser(id: String!): Boolean!
  }
`;

module.exports = {
  typeDefs
}
