module.exports = {
  name: "session",
  secret: "super secret secret",
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 3,
    secure: false
  },
  resave: false,
  saveUninitialized: true
};
