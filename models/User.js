const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: null,
  },
  isAuthenticated: {
    type: Boolean,
    default: false,
    required: true,
  }
},
{ timestamps: true });

const User = mongoose.model('users', UserSchema);

module.exports = User;
