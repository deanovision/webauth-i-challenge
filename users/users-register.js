const express = require("express");
const db = require("./users-model");
const bcrypt = require("bcryptjs");
const router = express.Router();

router.post("/", (req, res) => {
  let user = req.body;
  console.log(req.body);
  if (!user.username || !user.password) {
    res.status(400).json({ message: "bad request" });
  } else {
    user.password = bcrypt.hashSync(user.password, 8);
    db.addUser(user).then(user => {
      res.status(201).json(user);
    });
  }
});

module.exports = router;
