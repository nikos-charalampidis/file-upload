const mongoose = require('mongoose');

const var = "test";

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
    default: null,
  },
});

module.exports = mongoose.model('Product', ProductSchema);
