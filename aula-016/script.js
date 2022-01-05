const content = document.querySelector(".content");
let fontSize = 18;

function zoomIn() {
  content.style.fontSize = `${fontSize++}px`;
}

function zoomOut() {
  content.style.fontSize = `${fontSize--}px`;
}
