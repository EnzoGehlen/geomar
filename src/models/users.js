const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  login: String,
  password: String,
  admin: Boolean,
  cart: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'items'
  }],
  library: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'items'
  }],
})
module.exports = mongoose.model('users', userSchema, 'users');
