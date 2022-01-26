const registerButton = document.getElementById("registerButton");
const clientName = document.getElementById("clientName");
const clientEmail = document.getElementById("clientEmail");
const clientExtension = document.getElementById("clientExtension");
const clientBirth = document.getElementById("clientBirth");
const clientSector = document.getElementById("clientSector");

function clientRegister() {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    mode: "cors",
    cache: "default",
    body: JSON.stringify({
      name: clientName.value,
      email: clientEmail.value,
      extension: clientExtension.value,
      birthDay: clientBirth.value,
      sector: clientSector.value,
    }),
  };
  fetch("http://localhost:3333/register", options).then((response) =>
    response.json().then((data) => console.log(data))
  );
}

registerButton.addEventListener("click", clientRegister);
