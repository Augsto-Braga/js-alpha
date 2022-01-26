const employees = require("./database");

function registerRoute(req, res) {
  const newEmployee = req.body;

  employees.push(newEmployee);

  console.log(employees);

  res.json("ok");
}

module.exports = registerRoute;
