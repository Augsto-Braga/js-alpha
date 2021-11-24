const username = document.getElementById("name");
const note = document.getElementsByName("note");
const usersNote = [];
const show = document.querySelector(".show");

function showContent() {
  let results = document.createElement("div");
  let user = {
    name,
    note,
  };

  for (let i = 0; i < note.length; i++) {
    if (note[i].checked) {
      user.name = username.value;
      user.note = note[i].value;
    }
  }

  usersNote.push(user);

  show.appendChild(results);

  results.setAttribute("class", "results");

  results.innerHTML += `<h2>Nome: ${user.name}</h2>
  <h2>O que achou da loja: ${user.note}</h2>`;
}
