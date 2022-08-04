//Import required packages
const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const Order = require('./Order');
const Favorite = require('./Favorite');
const productSchema = require('./Product');

//User Schema
const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
    },
    orders: [Order.schema],
    favorites: [Favorite.schema]
});

//Set up middleware to create password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

//Compare password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

//Create User Model
const User = model('User', userSchema);

//Export User Model
module.exports = User;