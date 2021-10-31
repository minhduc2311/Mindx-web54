const readUsers = async () => {
  try {
    const dataUsers = await fs.promises.readFile("users.json", {
      encoding: "utf-8",
    });
    console.log(dataUsers);
  } catch {
    console.log(err);
  }
};

module.exports = readUsers;
