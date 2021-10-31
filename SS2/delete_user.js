const fs = require("fs");

const deleteUser = async (id) => {
  try {
    const dataUsers = await fs.promises.readFile("users.json", {
      encoding: "utf-8",
    });
    const listUsers = JSON.parse(dataUsers);
    const newListUsers = listUsers.filter((user) => user.id != id);
    await fs.promises.writeFile("users.json", JSON.stringify(newListUsers));
  } catch (err) {
    console.log(err);
  }
};

module.exports = deleteUser;
