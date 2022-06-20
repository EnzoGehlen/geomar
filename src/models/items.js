const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String,
  price: String,
  description: String,
  image: String,
  release: Date,
  category: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'categories'
  },
})
module.exports = mongoose.model('items', itemSchema, 'items');
