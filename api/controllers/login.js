const jwt = require('jsonwebtoken');
const { mysecret } = require('../../config');

const login = (req, res) => {
  if (!req.username) {
    return res.status(403).json({
      error: 'no username check your comparePW middleware'
    });
  }
  const payload = {
    username: req.username
  };
  const token = jwt.sign(payload, mysecret);
  res.json({ token });
};

module.exports = {
  login
};
