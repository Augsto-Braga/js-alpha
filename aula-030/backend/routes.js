const users = require("./database");
const crypto = require("crypto");

class Routes {
  registerRoute(req, res) {
    const currentUser = req.body;

    users.forEach((user) => {
      if (user.username == currentUser.username) {
        res.json("Usuário já cadastrado!");
      } else {
        const token = crypto.randomUUID();

        const newUser = {
          username: currentUser.username,
          password: currentUser.password,
          token: token,
        };

        users.push(newUser);
        console.log(users);
        res.json("Usuário cadastrado com sucesso!");
      }
    });
  }
}

const routes = new Routes();

module.exports = routes;
