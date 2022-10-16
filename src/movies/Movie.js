const jwt = require('jsonwebtoken')
const BaseModel = require("../BaseModel")
const MovieModel = require('../../models/Movie')
const UserModel = require('../../models/User')
const { ApolloError } = require("apollo-server-express")
const { UNAUTHORIZED, RESOURCE_NOT_FOUND } = require('../../utils/errorCode')

class Movie extends BaseModel {

  static async getMovies(_, args) {
    const movie = await MovieModel.find({}).select('id title image storyline');
    if (!movie) throw new ApolloError('There is not movie present in the database!');

    return movie
  }

  static async getOneMovie(_, args, context) {
    let { id = "" } = args;

    const user = await UserModel.findById(context?.req?.verifiedUser?.id);
    if (!user) {
      id = "";
      throw new ApolloError(UNAUTHORIZED);
    }
    const movie = await MovieModel.findById(id);
    console.log(movie);
    if (!movie) throw new ApolloError('This movie is not present in the database!', RESOURCE_NOT_FOUND);

    const newCreatedData = {
      ...movie._doc,
      id: movie._doc._id,
      genres: movie._doc.genres.map((r) => { return r.name }),
      directors: movie._doc.directors.map((r) => { return r.name }),
      writers: movie._doc.writers.map((r) => { return r.name }),
      stars: movie._doc.stars.map((r) => { return r.name }),
    }

    return newCreatedData
  }

  static async createMovie(_, args, context) {
    let { movieData } = args;

    const user = await UserModel.findById(context?.req?.verifiedUser?.id);
    if (!user || !user?.isAuthenticated) {
      movieData = {};
      throw new ApolloError(UNAUTHORIZED);
    }

    const oldMovieTitle = await MovieModel.findOne({ title: movieData?.title }).exec();
    if (oldMovieTitle) throw new ApolloError('This movie already present in the database!', UNAUTHORIZED);

    const newData = {
      ...movieData,
      genres: movieData.genres.map((r) => { return { id: r, name: r } }),
      directors: movieData.directors.map((r) => { return { id: r, name: r } }),
      writers: movieData.writers.map((r) => { return { id: r, name: r } }),
      stars: movieData.stars.map((r) => { return { id: r, name: r } }),
    }

    const movie = new MovieModel(newData)
    await movie.save()

    const newCreatedData = {
      ...movie._doc,
      id: movie._doc._id,
      genres: movie._doc.genres.map((r) => { return r.name }),
      directors: movie._doc.directors.map((r) => { return r.name }),
      writers: movie._doc.writers.map((r) => { return r.name }),
      stars: movie._doc.stars.map((r) => { return r.name }),
    }

    return newCreatedData
  }
}

module.exports = Movie;