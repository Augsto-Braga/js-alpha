let array = [];
let v1 = document.getElementById("v1");
let v2 = document.getElementById("v2");
let v3 = document.getElementById("v3");
let v4 = document.getElementById("v4");
const showArray = document.createElement("div");
const main = document.querySelector("main");

function show(arr) {
  main.appendChild(showArray);

  showArray.setAttribute("class", "showArray");

  showArray.innerHTML = `<h3>Array: ${arr}</h3>`;
}

function pop() {
  array = [
    Number(v1.value),
    Number(v2.value),
    Number(v3.value),
    Number(v4.value),
  ];
  show(array);
}

function crescArray() {
  array = [
    Number(v1.value),
    Number(v2.value),
    Number(v3.value),
    Number(v4.value),
  ];
  let length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
  }

  show(array);
}

function invertArray() {
  array = [
    Number(v1.value),
    Number(v2.value),
    Number(v3.value),
    Number(v4.value),
  ];

  let newArray = [array[3], array[2], array[1], array[0]];

  show(newArray);
}
