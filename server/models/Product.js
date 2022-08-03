const { convertNodeHttpToRequest } = require('apollo-server-core');
const mongoose = require('mongoose');

const { Schema, model } = mongoose;

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
  productId: {
    type: String,
    required: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }
});

const Product = model('Product', productSchema);

module.exports = Product;