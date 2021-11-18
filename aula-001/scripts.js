const nome = document.getElementById("name");
const photo = document.getElementById("photo");
const age = document.getElementById("age");
const status = document.getElementById("status");
const title = document.getElementById("title");
const descriptions = document.getElementById("descriptions");
const links = document.getElementById("links");
const image = document.getElementById("image");
const body = document.getElementById("body");
const description = document.getElementById("description");
const hobby = document.getElementById("hobby");

nome.innerHTML = "Augusto Braga";
age.innerHTML = "Idade: 24 anos";
status.innerHTML = "Estado civil: Solteiro";
title.innerHTML = "Tocar Guitarra";
descriptions.innerHTML =
  "Toco guitarra fazem muitos anos, trabalhei durante muitos anos da minha vida somente com isso, hoje esse é o meu maior hobby.";
links.innerHTML = "Link para ver um vídeo";

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

hobby.style.width = "350px";
hobby.style.height = "500px";
hobby.style.margin = "0 15 0 0";
hobby.style.backgroundColor = "rgb(255, 129, 129)";
hobby.style.display = "flex";
hobby.style.flexDirection = "column";
hobby.style.justifyContent = "center";
hobby.style.alignItems = "center";
