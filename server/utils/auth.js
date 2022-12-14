//Import required packages 
const jwt = require('jsonwebtoken');

//Set up secret and expiration date 
const secret = 'mysecretsshhhhh';
const expiration = '2h';

//Export module 
module.exports = {

  //Function for authentication routes 
  authMiddleware: function ({ req }) {

    //Allows token to be sent via req.query or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    //["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) token = token.split(' ').pop().trim();

    if (!token) return req;

    //Verify token and get user data out of it
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    //Return the request object so it can be passed to the resolver as "context"
    return req;
  },

  //Function for sigin token 
  signToken: function ({ firstName, email, _id }) {
    const payload = { firstName, email, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};