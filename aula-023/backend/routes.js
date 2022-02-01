const clients = require("./database");

class Routes {
  calculateRoute(req, res) {
    const op1 = Number(req.query.op1);
    const op2 = Number(req.query.op2);
    const operation = req.query.operation;

    function Calculator() {
      function add(op1, op2) {
        return Number(op1 + op2);
      }

      function sub(op1, op2) {
        return op1 - op2;
      }

      function multi(op1, op2) {
        return op1 * op2;
      }

      function div(op1, op2) {
        return op1 / op2;
      }

      return {
        add,
        sub,
        multi,
        div,
      };
    }

    const calculator = new Calculator();

    if (!operation) {
      res.json("Selecione uma operação!");
    } else {
      let result = 0;
      if (operation == "add") {
        result = calculator.add(op1, op2);
      } else if (operation == "sub") {
        result = calculator.sub(op1, op2);
      } else if (operation == "multi") {
        result = calculator.multi(op1, op2);
      } else if (operation == "div") {
        result = calculator.div(op1, op2);
      }
      res.json(result);
    }
  }
}

const routes = new Routes();

module.exports = routes;
