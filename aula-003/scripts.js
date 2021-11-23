function fillMain() {
  const main = document.querySelector("main");
  const header = document.createElement("div");
  const description = document.createElement("div");
  const content = document.createElement("div");
  const images = document.createElement("div");
  const foto = document.createElement("img");
  const body = document.querySelector("body");

  body.style.width = "100vw";
  body.style.height = "90vh";
  body.style.display = "flex";
  body.style.alignItems = "center";
  body.style.justifyContent = "center";

  main.style.width = "800px";
  main.style.height = "500px";
  main.style.backgroundColor = "#77be77";

  main.appendChild(header);

  header.innerHTML = "Cachorro";
  header.style.width = "100%";
  header.style.height = "50px";
  header.style.display = "flex";
  header.style.alignItems = "center";
  header.style.justifyContent = "center";
  header.style.fontSize = "24px";
  header.style.fontWeight = "bolder";

  main.appendChild(content);

  content.style.height = "90%";
  content.style.display = "flex";
  content.style.alignItems = "center";

  content.appendChild(description);

  description.innerHTML =
    "O animal que eu mais me identifico são os cachorros domésticos pois tive cachorro a vida toda e eles são muito companheiros, brincalhões, são animais incríveis! <br /> O habtat deles é o habtat doméstico.";
  description.style.width = "40%";
  description.style.marginTop = "15px";
  description.style.marginLeft = "40px";
  description.style.marginRight = "40px";
  description.style.fontSize = "20px";

  content.appendChild(images);

  images.style.display = "flex";
  images.style.flexDirection = "column";

  images.appendChild(foto);

  foto.src = "img/cachorro.jpg";
  foto.style.width = "360px";
}

fillMain();
