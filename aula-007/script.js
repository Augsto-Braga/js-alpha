const main = document.querySelector("main");
const count = document.getElementById("count");
const board = document.getElementById("board");
let divErased = document.createElement("div");
let c = 0;
let i = 0;
let boardErased = 0;

function fillBoard() {
  while (c < Number(count.value)) {
    board.innerHTML += `<p>Palhaço da turma não é uma profissão remunerada</p>`;
    c++;
    i++;
    if (i === 12) {
      board.innerHTML = "";
      i = 0;
      boardErased += 1;
      c -= 1;
    }
  }

  main.appendChild(divErased);
  divErased.setAttribute("class", "boardErased");

  if (boardErased === 1) {
    divErased.innerHTML = `<h2>O quadro negro foi apagado 1 vez</h2>`;
  } else {
    divErased.innerHTML = `<h2>O quadro negro foi apagado ${boardErased} vezes</h2>`;
  }
}
