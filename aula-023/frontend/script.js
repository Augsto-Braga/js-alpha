const operator = document.getElementById("operator");
const addition = document.getElementById("addition");
const subtraction = document.getElementById("subtraction");
const multiplication = document.getElementById("multiplication");
const division = document.getElementById("division");
const equal = document.getElementById("equal");
const content = document.querySelector(".content");

let operator1 = undefined;
let operator2 = undefined;
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

  async setOperator2() {
    operator2 = Number(operator.innerHTML);
    operator.innerHTML = "";

    const options = {
      method: "GET",
      mode: "cors",
      cache: "default",
    };

    if (operator1 === undefined) {
      const response = await fetch(`http://localhost:3333/`, options);
      content.innerHTML = await response.json();
    } else {
      const response = await fetch(
        `http://localhost:3333/?op1=${operator1}&op2=${operator2}&operation=${operation}`,
        options
      );
      content.innerHTML = await response.json();
    }
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
});
