const buttomStart = document.getElementById("buttomStart");

buttomStart.addEventListener("click", (event) => {
  const options = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };

  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject();
    }, 3000);
    fetch("http://localhost:3333", options).then((response) => {
      response.json().then((data) => resolve(console.log(data)));
    });
  });
});
