const {gql} = require('apollo-server-express');

const typeDefs = gql`
  type Movie {
    id: String!
    title: String!
    image: String
    storyline: String
    genres: [String]
    directors: [String]
    writers: [String]
    stars: [String]
    rating: Float
    runtime: String
    releaseDate: String
    countryOfOrigin: String
    language: String
  }

  input CreateMovieInput {
    title: String!
    image: String
    storyline: String
    genres: [String]
    directors: [String]
    writers: [String]
    stars: [String]
    rating: Float
    runtime: String
    releaseDate: String
    countryOfOrigin: String
    language: String
  }

  extend type Query {
    getMovies: [Movie]!
    getOneMovie(id: String!): Movie!
  }

  extend type Mutation {
    createMovie(movieData: CreateMovieInput!): Movie!
  }
`;

module.exports = {
  typeDefs
}
