let player = "";
const positions = document.querySelectorAll(".position");
let turn = true;

let game = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

function turnVerify() {
  if (turn == true) {
    player = "O";
  } else if (turn == false) {
    player = "X";
  }
}

function play(p) {
  const position = document.getElementById(p);

  switch (p) {
    case 1:
      if (game[0][0] == "") {
        turnVerify();
        game[0][0] = player;
        position.innerHTML = player;
        turn = !turn;
      }
      break;
    case 2:
      if (game[0][1] == "") {
        turnVerify();
        game[0][1] = player;
        position.innerHTML = player;
        turn = !turn;
      }
      break;
    case 3:
      if (game[0][2] == "") {
        turnVerify();
        game[0][2] = player;
        position.innerHTML = player;
        turn = !turn;
      }
      break;
    case 4:
      if (game[1][0] == "") {
        turnVerify();
        game[1][0] = player;
        position.innerHTML = player;
        turn = !turn;
      }
      break;
    case 5:
      if (game[1][1] == "") {
        turnVerify();
        game[1][1] = player;
        position.innerHTML = player;
        turn = !turn;
      }
      break;
    case 6:
      if (game[1][2] == "") {
        turnVerify();
        game[1][2] = player;
        position.innerHTML = player;
        turn = !turn;
      }
      break;
    case 7:
      if (game[2][0] == "") {
        turnVerify();
        game[2][0] = player;
        position.innerHTML = player;
        turn = !turn;
      }
      break;
    case 8:
      if (game[2][1] == "") {
        turnVerify();
        game[2][1] = player;
        position.innerHTML = player;
        turn = !turn;
      }
      break;
    case 9:
      if (game[2][2] == "") {
        turnVerify();
        game[2][2] = player;
        position.innerHTML = player;
        turn = !turn;
      }
      break;
  }
}
