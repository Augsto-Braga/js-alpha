let array = [];
let v1 = document.getElementById("v1");
let v2 = document.getElementById("v2");
let v3 = document.getElementById("v3");
let v4 = document.getElementById("v4");
const showArray = document.createElement("div");
const main = document.querySelector("main");

function popArray() {
  array = [v1.value, v2.value, v3.value, v4.value];
}

function show() {
  main.appendChild(showArray);

  showArray.setAttribute("class", "showArray");

  showArray.innerHTML = `<h3>Array: ${array}</h3>`;
}

function pop() {
  popArray();
  show();
}

function crescArray(items) {
  let length = items.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (items[j] > items[j + 1]) {
        let tmp = items[j];
        items[j] = items[j + 1];
        items[j + 1] = tmp;
      }
    }
  }

  show();
}

function invertArray() {
  popArray();
  array;

  show();
}
