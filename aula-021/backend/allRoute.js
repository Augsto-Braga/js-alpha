const employees = require("./database");

function allRoute(req, res) {
  res.json(employees);
}
module.exports = allRoute;
