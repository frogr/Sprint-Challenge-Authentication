const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/userModels');
const { mysecret } = require('../../config');
const SaltRounds = 11;

const authenticate = (req, res, next) => {
  const token = req.get('Authorization');
  if (token) {
    jwt.verify(token, mysecret, (err, decoded) => {
      if (err) return res.status(422).json(err);
      req.decoded = decoded;
      next();
    });
  } else {
    return res.status(403).json({
      error: 'No token provided, must be set on the Authorization Header'
    });
  }
};

const encryptUserPW = (req, res, next) => {
  const { username, password } = req.body;
  // https://github.com/kelektiv/node.bcrypt.js#usage
  bcrypt
    .hash(password, 11)
    .then(pw => {
      req.password = pw;
      next();
    })
    .catch(err => {
      throw new Error(err);
    });
};

const compareUserPW = (req, res, next) => {
  const { username, password } = req.body;
  // https://github.com/kelektiv/node.bcrypt.js#usage
  User.findOne({ username }, (err, user) => {
    if (err || user === null) {
      res.status(422).json({ err: 'No user found, wrong ID' });
    }
    const hashedPw = user.password;
    bcrypt
      .compare(password, hashedPw)
      .then(response => {
        if (!response) throw new Error();
        req.username = user.username;
        next();
      })
      .catch(error => {
        res.status(500).json({ '!:E': 'invalid pass' });
      });
  });
};

module.exports = {
  authenticate,
  encryptUserPW,
  compareUserPW
};
