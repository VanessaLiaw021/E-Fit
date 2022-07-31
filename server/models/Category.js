const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const Category = model('Category', categorySchema);

module.exports = Category;