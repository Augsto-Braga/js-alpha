const operator = document.getElementById("operator");
const addition = document.getElementById("addition");
const subtraction = document.getElementById("subtraction");
const multiplication = document.getElementById("multiplication");
const division = document.getElementById("division");
const equal = document.getElementById("equal");
const content = document.querySelector(".content");

let operator1 = 0;
let operator2 = 0;
let operation = "";

function eraseOperator() {
  operator.innerHTML = "";
}

function insert(num) {
  operator.innerHTML += num;
}

class Calculator {
  setOperator1() {
    operator1 = Number(operator.innerHTML);
    operator.innerHTML = "";
  }

  setOperator2() {
    operator2 = Number(operator.innerHTML);
    operator.innerHTML = "";
  }

  add(op1, op2) {
    const result = op1 + op2;
    content.innerHTML = `${result}`;
  }

  sub(op1, op2) {
    const result = op1 - op2;
    content.innerHTML = `${result}`;
  }

  multi(op1, op2) {
    const result = op1 * op2;
    content.innerHTML = `${result}`;
  }

  div(op1, op2) {
    const result = op1 / op2;
    content.innerHTML = `${result}`;
  }
}

const calculator = new Calculator();

addition.addEventListener("click", (event) => {
  calculator.setOperator1();
  operation = "add";
  content.innerHTML = "";
});

subtraction.addEventListener("click", (event) => {
  calculator.setOperator1();
  operation = "sub";
  content.innerHTML = "";
});

multiplication.addEventListener("click", (event) => {
  calculator.setOperator1();
  operation = "multi";
  content.innerHTML = "";
});

division.addEventListener("click", (event) => {
  calculator.setOperator1();
  operation = "div";
  content.innerHTML = "";
});

equal.addEventListener("click", (event) => {
  calculator.setOperator2();

  if (!operator1) {
    content.innerHTML = "Selecione uma operação!";
  } else if (operation === "add") {
    calculator.add(operator1, operator2);
    console.log(operator1, operator2, operation);
  } else if (operation === "sub") {
    calculator.sub(operator1, operator2);
    console.log(operator1, operator2, operation);
  } else if (operation === "multi") {
    calculator.multi(operator1, operator2);
    console.log(operator1, operator2, operation);
  } else if (operation === "div") {
    calculator.div(operator1, operator2);
    console.log(operator1, operator2, operation);
  }
});
