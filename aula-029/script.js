const main = document.querySelector("main");
let firstSearch = true;

async function consult() {
  const searchInput = document.getElementById("numberId");

  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${searchInput.value}`
  );
  const character = await response.json();
  const responseName = await fetch(
    `https://rickandmortyapi.com/api/character/?name=${character.name}`
  );
  const characterByName = await responseName.json();

  if (firstSearch === true) {
    main.innerHTML += `<div id="result">
                        <h3 id="resultH3">O personagem desse ID é: ${characterByName.results[0].name}</h3>
                      </div>`;
  } else {
    const resultH3 = document.getElementById("resultH3");
    resultH3.innerHTML = `O personagem desse ID é: ${characterByName.results[0].name}`;
  }

  firstSearch = false;
}
