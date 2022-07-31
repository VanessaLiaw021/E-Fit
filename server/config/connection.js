//Import required packages 
const mongoose = require('mongoose');

//Connect to mongoose 
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/fitness-shopping', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Export mongoose connection 
module.exports = mongoose.connection;