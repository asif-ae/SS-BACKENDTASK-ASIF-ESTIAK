const Movie = require('./Movie');

const resolvers = {
  Query: {
    getMoviesAndTVShows: async (args) => await Movie.getMovies(args),
    getOneMovieOrTVShows: async (_, args, context) => await Movie.getOneMovie(_, args, context),
  },
  Mutation: {
    createMovieAndTVShows: async (_, args, context) => await Movie.createMovie(_, args, context),
  },
};

module.exports = {
  resolvers
}
