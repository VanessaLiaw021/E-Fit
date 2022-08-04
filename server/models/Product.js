//Import required packages
const { convertNodeHttpToRequest } = require('apollo-server-core');
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

//Product Schema
const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true,
    min: 0.01
  },
  size: [{
    type: String,
    required: false
  }],
  quantity: {
    type: Number,
    min: 0,
    default: 0
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }
});

//Create Product Model
const Product = model('Product', productSchema);

//Export Product Model
module.exports = Product;