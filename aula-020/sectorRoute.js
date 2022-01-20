const employees = require("./data");

function sectorRoute(req, res) {
  const param = req.query.sector;
  const birthEmployees = [];

  if (param === undefined) {
    res.send("Coloque um setor");
  } else {
    employees.forEach((element) => {
      if (param == element.setor) {
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

module.exports = sectorRoute;
