const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.post('/', (req, res) => {
  const { email, password } = req.body;

  const userFilePath = path.join(__dirname, '../data/user.json');

  let users = [];
  try {
    const data = fs.readFileSync(userFilePath, 'utf-8');
    users = JSON.parse(data);
  } catch (error) {
    return res.status(500).json({ message: "Failed to read user data." });
  }

  const user = users.find(u => u.email === email);

  if (!user) {
    return res.status(400).json({ message: "Incorrect username." });
  }

  if (user.password !== password) {
    return res.status(400).json({ message: "Incorrect password." });
  }

  return res.json({ message: "Login successfully." });
});

module.exports = router;
