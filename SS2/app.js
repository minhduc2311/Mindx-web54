const fs = require("fs");
const addUser = require('./add_user')
const readUsers = require('./read_users')
const readUser = require('./read_user')
const deleteUser = require('./delete_user')
const updateUser = require('./update_user')

const users = [
  { id: 1, username: "duc", password: "12345" },
  { id: 2, username: "tuan", password: "12346" },
  { id: 3, username: "nam", password: "12347" },
];

fs.writeFile("users.json", JSON.stringify(users), (err) => {
  console.log(err);
}); 

addUser({ username: "son", password: "121231323" });

updateUser(1, {id:1, username:"ducccc",password:"12345"})