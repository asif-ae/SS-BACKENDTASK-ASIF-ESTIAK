const mongoose = require('mongoose');
const { Schema } = mongoose;

const MovieSchema = new Schema({
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

const Movie = mongoose.model('movies', MovieSchema);

module.exports = Movie;
