const fs = require("fs");
const readUser = require("./read_user")
const updateUser = async (id, dataUpdate) => {
  try {
    const dataUsers = await fs.promises.readFile("users.json", {
      encoding: "utf-8",
    });
    // check user can tim  co ton tai
    if (await readUser(id)) {
      const listUsers = JSON.parse(dataUsers);
      for (let i = 0; i < listUsers.length; i++) {
        if (listUsers[i].id == id) {
          listUsers[i] = dataUpdate;
        }
      }
      await fs.promises.writeFile("users.json", JSON.stringify(listUsers));
      console.log("thanh cong");
    } else {
      console.log("ko ton tai");
    }
    // let dataOneUser = listUsers.filter(user => user.id == id);
    // dataOneUser = dataUpdate;
    // // listUsers.concat(dataOneUser);
  } catch (err) {
    console.log(err);
  }
};

module.exports = updateUser;
