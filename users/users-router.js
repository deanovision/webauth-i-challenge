const express = require("express");
const db = require("./users-model");
const bcrypt = require("bcryptjs");
const router = express.Router();

router.get("/", (req, res) => {
  db.getUsers()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json({ message: "error getting users" });
    });
});
