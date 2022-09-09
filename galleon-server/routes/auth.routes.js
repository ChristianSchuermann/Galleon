const express = require('express');
const User = require('../models/User.model');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const saltRounds = 10;

router.post('/signup', (req, res) => {
    const { email, password } = req.body;
  
    // All fields are mandatory
    if (email === '' || password === '' ) {
      res.status(400).json({ errorMessage: 'All fields are mandatory' });
      return;
    }
  
    console.log(password, req.body);
  
    //check password format: 6 characters, 1 number, 1 lowercase, 1 uppercase
    const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    if (!passwordRegex.test(password)) {
      res.status(400).json({
        errorMessage:
          'Password should include at least 6 characters with 1 capital, 1 lowercase.',
      });
      return;
    }
  
//check if user already exists
User.findOne({ email })
.then((foundUser) => {
  // If the user with the same email already exists, send an error response
  if (foundUser) {
    res.status(400).json({ message: "User is already exists. Please log in." });
    return;
  }

  // If email is unique, proceed to hash the password
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashedPassword = bcrypt.hashSync(password, salt);

  // Create the new user in the database
 
  return User.create({ email, password: hashedPassword,});
})
.then((createdUser) => {
  // Deconstruct the newly created user object to omit the password
  // We should never expose passwords publicly
  const { email, _id } = createdUser;

  // Create a new object that doesn't expose the password
  const user = { email, _id };

  // Send a json response containing the user object
  res.status(201).json({ user: user });
})
.catch(err => {
  console.log(err);
  res.status(500).json({ message: "Internal Server Error" })
});

  });

  
  
  router.post('/login', (req, res) => {
    const { email, password } = req.body;
    
    if (email === '' || password === '') {
      res.status(400).json({ errorMessage: 'All fields are mandatory.' });
      return;
    }
  
    User.findOne({ email })
      .then((foundUser) => {
        if (!foundUser) {
          res.status(400).json({ errorMessage: 'User is not found' });
          return;
        }
        const passwordCorrect = bcrypt.compareSync(password, foundUser.password);
        if (passwordCorrect) {
          const { _id, email } = foundUser;
          const payload = { _id, email };
          const authToken = jwt.sign(payload, process.env.TOKEN_SECRET, {
            algorithm: 'HS256',
            expiresIn: '6h',
          });
  
          res.status(200).json({ authToken: authToken });
        } else {
          res.status(401).json({ message: 'We cannot authenticate the user' });
        }
      })
      .catch((err) => console.log(err));
  });
  
  router.get('/verify', (req, res) => {
    res.status(200).json(req.payload);
  });
  
  module.exports = router;