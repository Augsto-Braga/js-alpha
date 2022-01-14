let j = 0;
let i = 0;

const matriz = [
  ["1,1", "1,2", "1,3"],
  ["2,1", "2,2", "2,3"],
  ["3,1", "3,2", "3,3"],
];

show(0);

function show(currentItem) {
  if (currentItem == matriz.length) return;
  console.log(matriz[i][j]);

  if (j == matriz.length) {
    j = 0;
    show(++currentItem);
  }
  j++;
  show(currentItem);
}
