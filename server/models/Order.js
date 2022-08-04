//Import required packages
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

//Order Schema
const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  ]
});

//Create the Order model
const Order = model('Order', orderSchema);

//Export Order Model
module.exports = Order;