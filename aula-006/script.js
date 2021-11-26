const main = document.querySelector("main");
const result = document.createElement("div");
const price = document.createElement("div");
const tab = document.createElement("div");
const bread = document.getElementsByName("bread");
const hamburger = document.getElementsByName("hamburger");
const salad = document.getElementsByName("salad");
const cheese = document.getElementsByName("cheese");

function calculateValue() {
  let total = 0;
  let breadValue = 0;
  let hamburgerValue = 0;
  let saladValue = 0;
  let cheeseValue = 0;
  let breadType = 0;
  let hamburgerType = 0;
  let saladType = 0;
  let cheeseType = 0;

  for (let i = 0; i < bread.length; i++) {
    if (bread[0].checked) {
      breadValue = 3;
      breadType = "Pão Francês";
    } else if (bread[1].checked) {
      breadValue = 8;
      breadType = "Pão de Australiano";
    } else if (bread[2].checked) {
      breadValue = 6;
      breadType = "Pão de Brioche";
    }
  }

  for (let i = 0; i < hamburger.length; i++) {
    if (hamburger[0].checked) {
      hamburgerValue = 13;
      hamburgerType = "Hamburger de Picanha";
    } else if (hamburger[1].checked) {
      hamburgerValue = 10;
      hamburgerType = "Hamburger de Costela";
    } else if (hamburger[2].checked) {
      hamburgerValue = 12;
      hamburgerType = "Hamburger Vegano";
    }
  }

  for (let i = 0; i < salad.length; i++) {
    if (salad[0].checked) {
      saladValue = 1.5;
      saladType = "Salada de Alface";
    } else if (salad[1].checked) {
      saladValue = 1.5;
      saladType = "Salada de Tomate";
    } else if (salad[2].checked) {
      saladValue = 3;
      saladType = "Salada de Alface e Tomate";
    } else if (salad[3].checked) {
      saladValue = 0;
      saladType = "Sem Salada";
    }
  }

  for (let i = 0; i < cheese.length; i++) {
    if (cheese[0].checked) {
      cheeseValue = 3;
      cheeseType = "Queijo Mussarela";
    } else if (cheese[1].checked) {
      cheeseValue = 3;
      cheeseType = "Queijo Prato";
    } else if (cheese[2].checked) {
      cheeseValue = 5;
      cheeseType = "Queijo Cheddar";
    }
  }

  total = breadValue + hamburgerValue + saladValue + cheeseValue;

  main.appendChild(result);

  result.setAttribute("class", "result");

  result.appendChild(price);

  price.setAttribute("class", "price");

  price.innerHTML = `
  <h3>O valor total do seu pedido é de R$${total.toFixed(2)}.</h3>`;

  result.appendChild(tab);

  tab.setAttribute("class", "tab");

  tab.innerHTML = `
<h3>Os ingredientes do lanche são:</h3>
<ul>
  <li>${breadType}</li>
  <li>${hamburgerType}</li>
  <li>${saladType}</li>
  <li>${cheeseType}</li>
</ul>`;
}
