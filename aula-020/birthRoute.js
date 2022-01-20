const employees = require("./data");

function birthRoute(req, res) {
  const param = req.query.birth;
  const birthEmployees = [];

  if (param === undefined) {
    res.send("Coloque o mês de aniversário");
  } else {
    employees.forEach((element) => {
      if (param == element.birthMounth) {
        birthEmployees.push(element);
      }
    });
    if (birthEmployees == []) {
      res.send("Nenhum funcionário nesse mês de aniversário");
    } else {
      res.json(birthEmployees);
    }
  }
}

module.exports = birthRoute;
