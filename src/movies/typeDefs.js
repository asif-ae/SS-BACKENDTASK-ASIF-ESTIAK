const {gql} = require('apollo-server-express');

const typeDefs = gql`
  type MovieAndTVShows {
    id: String!
    title: String!
    image: String
    storyline: String
    genres: [String]
    directors: [String]
    writers: [String]
    stars: [String]
    provider: String
    totalEpisodes: Int
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
    provider: String
    totalEpisodes: Int
    rating: Float
    runtime: String
    releaseDate: String
    countryOfOrigin: String
    language: String
  }

  extend type Query {
    getMoviesAndTVShows: [MovieAndTVShows]!
    getOneMovieOrTVShows(id: String!): MovieAndTVShows!
  }

  extend type Mutation {
    createMovieAndTVShows(movieOrTVShowsData: CreateMovieInput!): MovieAndTVShows!
  }
`;

module.exports = {
  typeDefs
}
