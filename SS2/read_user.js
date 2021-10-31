const fs = require("fs");

const readUser = async (id) => {
  try {
    const dataUsers = await fs.promises.readFile("users.json", {
      encoding: "utf-8",
    });
    const listUsers = JSON.parse(dataUsers);
    const dataOneUser = listUsers.filter((user) => user.id == id);
    console.log(dataOneUser);
    return true;
  } catch (err) {
    console.log(err);
  }
};

module.exports = readUser;
