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
    User.findOne({ email }).then((foundUser) => {
      if (foundUser) {
        res.status(400).json({ errorMessage: 'User is already exists. Please log in.' });
      }
    });
  
    //If no found user -> create user
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(password, salt);
    User.create({
      password: hashedPassword,
      email
    })
      .then((createdUser) => {
        const { email } = createdUser;
        const user = { email };
        res.render(201).json({ user: user });
      })
      .catch((err) => console.log(err));
  });
  
  router.post('/login', (req, res) => {
    const { email, password } = req.body;
    
    if (email === '' || password === '') {
      res.status(400).json({ errorMessage: 'All fields are mandatory' });
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