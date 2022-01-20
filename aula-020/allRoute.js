const employees = require("./data");

function allRoute(req, res) {
  res.json(employees);
}
module.exports = allRoute;
