const nome = document.querySelector(".name");
const photo = document.querySelector(".photo");
const age = document.querySelector(".age");
const status = document.querySelector(".status");
const title = document.querySelector(".title");
const descriptions = document.querySelector(".descriptions");
const links = document.querySelector(".links");
const image = document.querySelector(".image");
const body = document.querySelector(".body");
const description = document.querySelector(".description");
const band = document.querySelector(".band");

nome.innerHTML = "Augusto Braga";
age.innerHTML = "Idade: 24 anos";
status.innerHTML = "Estado civil: Solteiro";
title.innerHTML = "Iron Maiden";
descriptions.innerHTML =
  "Iron Maiden é uma banda de heavy metal inglesa fundada em 1975. Minhas musicas favoritas são: Where Eagles Dare, Phantom of the Opera, The Evil That Man Do";
links.innerHTML = "Link para ver seu último clipe";

body.style.width = "100%";
body.style.height = "100%";
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";

description.style.width = "350px";
description.style.height = "500px";
description.style.margin = "0 15 0 0";
description.style.backgroundColor = "rgb(152, 152, 255)";
description.style.display = "flex";
description.style.flexDirection = "column";
description.style.justifyContent = "center";
description.style.alignItems = "center";

band.style.width = "350px";
band.style.height = "500px";
band.style.margin = "0 15 0 0";
band.style.backgroundColor = "gray";
band.style.display = "flex";
band.style.flexDirection = "column";
band.style.justifyContent = "center";
band.style.alignItems = "center";
