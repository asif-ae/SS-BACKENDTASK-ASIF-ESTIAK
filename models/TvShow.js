const mongoose = require('mongoose');
const { Schema } = mongoose;

const TvShowSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
    unique: true,
  },
  storyline : {
    type: String,
    required: true,
  },
  genres: [{
    id: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
  }],
  directors: [{
    id: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
  }],
  writers: [{
    id: {
      type: String,
      unique: true,
    },
    name: {
      type: String,
      unique: true,
    },
  }],
  stars: [{
    id: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
  }],
  provider: {
    type: String,
    required: true,
  },
  totalEpisodes: {
    type: Number,
    required: true,
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

const TvShow = mongoose.model('tv_shows', TvShowSchema);

module.exports = TvShow;
