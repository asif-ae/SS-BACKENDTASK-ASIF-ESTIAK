const mongoose = require('mongoose');
const { Schema } = mongoose;

const MoviesAndTVShowsSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
  },
  storyline : {
    type: String,
    required: true,
  },
  genres: [{
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  }],
  directors: [{
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  }],
  writers: [{
    id: {
      type: String,
    },
    name: {
      type: String,
    },
  }],
  stars: [{
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  }],
  provider: {
    type: String,
  },
  totalEpisodes: {
    type: Number,
  },
  rating: {
    type: Number,
    required: true,
  },
  runtime: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: Date,
    required: true,
  },
  countryOfOrigin: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
},
{ timestamps: true });

const MoviesAndTVShows = mongoose.model('movies_and_tv_shows', MoviesAndTVShowsSchema);

module.exports = MoviesAndTVShows;
