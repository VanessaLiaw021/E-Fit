//Import required packages
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

//Favorite Model 
const favoriteSchema = new Schema({ 
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  ]
});

//Create Favorite Schema 
const Favorite = model('Favorite', favoriteSchema);

//Export Favorite Model 
module.exports = Favorite;