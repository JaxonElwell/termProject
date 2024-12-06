const express = require('express');
const router = express.Router();
const { getUser } = require('../apiCommands');

// Login route
router.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  console.log('Received login request:', username, password); // Log the received login request
  getUser(username, password, (err, user) => {
    if (err) {
      console.error('Error logging in:', err);
      return res.status(500).send('Error logging in');
    }
    if (!user) {
      return res.status(401).send('Invalid username or password');
    }
    res.json({ userId: user.id });
  });
});

module.exports = router;