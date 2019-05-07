const express = require("express");
const session = require("express-session");
const server = express();
const restricted = require("./auth/restricted");
const sessionConfig = require("./auth/session");
const registerRouter = require("./users/users-register");
const loginRouter = require("./users/users-login");
const usersRouter = require("./users/users-router");

server.use(express.json());
server.use(session(sessionConfig));

server.use("/api/register", registerRouter);
server.use("/api/login", loginRouter);
server.use("/api/users", restricted, usersRouter);

module.exports = server;
