const Movie = require('./Movie');

const resolvers = {
  Query: {
    getMovies: async (args) => await Movie.getMovies(args),
    getOneMovie: async (_, args, context) => await Movie.getOneMovie(_, args, context),
  },
  Mutation: {
    createMovie: async (_, args, context) => await Movie.createMovie(_, args, context),
  },
};

module.exports = {
  resolvers
}
