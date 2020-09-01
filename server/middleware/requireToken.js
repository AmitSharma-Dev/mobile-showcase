const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User')
const { jwtSecret } = require('../config')

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).send({ error: "you must be logged in" })
  }
  const token = authorization.replace("Bearer ", "");
  if(token) {
    jwt.verify(token, jwtSecret, async (err, payload) => {
      if (err) {
        return res.status(401).send({ error: "you must be logged in" });
      }
      const { userId } = payload;
      const user = await User.findById(userId)
      req.user = user;
      next();
    })
  } else {
    return res.status(401).send({ error: "you must be logged in" });
  }
}