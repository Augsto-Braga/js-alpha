const employees = require("./data");

function sectorRoute(req, res) {
  const param = req.query.sector;
  const sectorEmployees = [];

  if (param === undefined) {
    res.send("Coloque um setor");
  } else {
    employees.forEach((element) => {
      if (param == element.setor) {
        sectorEmployees.push(element);
      }
    });
    if (sectorEmployees == []) {
      res.send("Nenhum funcionário nesse Setor");
    } else {
      res.json(sectorEmployees);
    }
  }
}

module.exports = sectorRoute;
