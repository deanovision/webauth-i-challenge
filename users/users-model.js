const db = require("../data/dbConfig");

module.exports = {
  getUsers,
  addUser,
  login
};

function getUsers() {
  return db("users");
}
function addUser(user) {
  return db("users")
    .insert(user)
    .then(id => {
      return db("users")
        .where({ id: id[0] })
        .first();
    });
}
function login(filter) {
  return db("users")
    .where(filter)
    .first();
}
