const express = require("express");
const registerRouter = require("./users/users-register");
const loginRouter = require("./users/users-login");
const server = express();

server.use(express.json());
server.use("/api/register", registerRouter);
server.use("/api/login", loginRouter);

module.exports = server;
