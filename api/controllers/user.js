const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  const { username } = req.body;
  const password = req.password;
  const newUser = new User({ username, password });
  newUser.save((err, savedUser) => {
    if (err) {
      res.status(422).json({ '!E: U + P fields needed': err.message });
      return;
    }
    res.json(savedUser);
  });
};

module.exports = {
  createUser
};
