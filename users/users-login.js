const express = require("express");
const db = require("./users-model");
const bcrypt = require("bcryptjs");
const router = express.Router();

router.post("/", (req, res) => {
  let { username, password } = req.body;
  db.login({ username })
    .then(user => {
      if (username && bcrypt.compareSync(password, user.password)) {
        req.session.username = user.username;
        res.status(200).json({ message: `welcome back ${username}` });
      } else {
        res.status(401).json({ message: "invalid credentials" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "error locating user" });
    });
});

module.exports = router;
