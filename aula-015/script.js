const mainHeader = document.querySelector(".mainHeader");
const section = document.querySelector("section");
const numbers = [];

function randomIntNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function drawnNumbers() {
  mainHeader.innerHTML = `<h2>Resultado do sorteio:</h2>`;

  let number = 0;
  let verify = false;

  const lottery = setInterval(() => {
    let createDiv = document.createElement("div");
    verify = false;

    while (verify === false) {
      number = randomIntNumber(1, 60);
      if (!numbers.includes(number)) {
        numbers.push(number);
        verify = true;
      }
    }

    section.appendChild(createDiv);
    createDiv.setAttribute("class", "drawnNumber");
    createDiv.innerHTML = `${number}`;

    console.log(number, verify, numbers);
  }, 1000);

  setTimeout(() => {
    clearInterval(lottery);
  }, 6000);
}
