const express = require('express');
const router = express.Router();
const requireToken = require('../middleware/requireToken')

router.get('/', requireToken, (req, res) => {
  res.send({ email: req.user.email })
})

module.exports = router;
