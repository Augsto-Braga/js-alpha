const firstValue = document.getElementById("first");
const secondValue = document.getElementById("second");
const addition = document.getElementById("addition");
const subtraction = document.getElementById("subtraction");
const multiplication = document.getElementById("multiplication");
const division = document.getElementById("division");
const content = document.querySelector(".content");

function add() {
  let result = Number(firstValue.value) + Number(secondValue.value);

  content.innerHTML = `${result}`;
}

function sub() {
  let result = Number(firstValue.value) - Number(secondValue.value);

  content.innerHTML = `${result}`;
}

function multi() {
  let result = Number(firstValue.value) * Number(secondValue.value);

  content.innerHTML = `${result}`;
}

function div() {
  let result = Number(firstValue.value) / Number(secondValue.value);

  content.innerHTML = `${result}`;
}
