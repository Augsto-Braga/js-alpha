const main = document.querySelector("main");
const result = document.querySelector(".result");
const reset = document.querySelector(".reset");
const upLevel = document.querySelector(".upLevel");
const laps = document.querySelector(".laps");
const section = document.querySelector("section");

const allPilots = [
  (pilot1 = {
    minSpeed: 0,
    maxSpeed: 0,
    drift: 0,
    pilotName: "pedro",
    carType: "",
    button: "btn1",
    exp: 0,
    level: 0,
    wins: 0,
    racePosition: "",
  }),
  (pilot2 = {
    minSpeed: 0,
    maxSpeed: 0,
    drift: 0,
    carType: "",
    pilotName: "juca",
    button: "btn2",
    exp: 0,
    level: 0,
    wins: 0,
    racePosition: "",
  }),
  (pilot3 = {
    minSpeed: 0,
    maxSpeed: 0,
    drift: 0,
    carType: "",
    pilotName: "edna",
    button: "btn3",
    exp: 0,
    level: 0,
    wins: 0,
    racePosition: "",
  }),
];

const cars = [
  (pop = {
    min: [110, 130],
    max: [180, 200],
    drift: [3, 4],
  }),
  (sport = {
    min: [125, 145],
    max: [195, 215],
    drift: [2, 3],
  }),
  (superSport = {
    min: [140, 160],
    max: [210, 230],
    drift: [1, 1.75],
  }),
];

let raceOk = [];

let pilot1win = 0;
let pilot2win = 0;
let pilot3win = 0;
let firstExp = 0;
let secondExp = 0;
let thirdExp = 0;

function randomIntNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function fillContent(pilot) {
  const content = document.getElementById(pilot.pilotName);

  content.innerHTML = `<h2>${pilot.pilotName}</h2>
                       <h3>Tipo de carro: ${pilot.carType}
                       <h3>Velocidade mínima: ${pilot.minSpeed}km/h</h3>
                       <h3>Velocidade máxima: ${pilot.maxSpeed}km/h</h3>
                       <h3>Derrapagem: ${pilot.drift}%</h3>
                       <h3>Nível do carro: ${pilot.level}</h3>
                       <h3>Número de vitórias: ${pilot.wins}</h3>`;
}

function createCar(pilot) {
  let typeOf = randomIntNumber(1, 100);

  if (typeOf <= 5) {
    pilot.carType = "Super Sport";
    pilot.minSpeed = randomIntNumber(cars[2].min[0], cars[2].min[1]);
    pilot.minSpeed += pilot.minSpeed * (pilot.level / 100);
    pilot.maxSpeed = randomIntNumber(cars[2].max[0], cars[2].max[1]);
    pilot.maxSpeed += pilot.maxSpeed * (pilot.level / 100);
    pilot.drift = randomNumber(cars[2].drift[0], cars[2].drift[1]).toFixed(2);
  } else if (typeOf > 5 && typeOf <= 40) {
    pilot.carType = "Sport";
    pilot.minSpeed = randomIntNumber(cars[1].min[0], cars[1].min[1]);
    pilot.minSpeed += pilot.minSpeed * (pilot.level / 100);
    pilot.maxSpeed = randomIntNumber(cars[1].max[0], cars[1].max[1]);
    pilot.maxSpeed += pilot.maxSpeed * (pilot.level / 100);
    pilot.drift = randomNumber(cars[1].drift[0], cars[1].drift[1]).toFixed(2);
  } else {
    pilot.carType = "Popular";
    pilot.minSpeed = randomIntNumber(cars[0].min[0], cars[0].min[1]);
    pilot.minSpeed += pilot.minSpeed * (pilot.level / 100);
    pilot.maxSpeed = randomIntNumber(cars[0].max[0], cars[0].max[1]);
    pilot.maxSpeed += pilot.maxSpeed * (pilot.level / 100);
    pilot.drift = randomNumber(cars[0].drift[0], cars[0].drift[1]).toFixed(2);
  }

  fillContent(pilot);

  raceOk.push("ok");
  if (raceOk.length == 3) {
    laps.removeAttribute("hidden");
  }
}

function race(maxLaps) {
  let laps = maxLaps;

  for (let i = 0; i < laps; i++) {
    let pilot1spd = randomNumber(pilot1.minSpeed, pilot1.maxSpeed);
    let pilot1lap = pilot1spd - (pilot1.drift * pilot1spd) / 100;

    let pilot2spd = randomNumber(pilot2.minSpeed, pilot2.maxSpeed);
    let pilot2lap = pilot2spd - (pilot2.drift * pilot2spd) / 100;

    let pilot3spd = randomNumber(pilot3.minSpeed, pilot3.maxSpeed);
    let pilot3lap = pilot3spd - (pilot3.drift * pilot3spd) / 100;

    if (pilot1lap > pilot2lap && pilot1lap > pilot3lap) {
      pilot1win++;
    } else if (pilot2lap > pilot1lap && pilot2lap > pilot3lap) {
      pilot2win++;
    } else {
      pilot3win++;
    }
  }

  if (pilot3win < pilot1win && pilot1win === pilot2win) {
    pilot1spd = randomNumber(pilot1.minSpeed, pilot1.maxSpeed);
    pilot1lap = pilot1spd - (pilot1.drift * pilot1spd) / 100;

    pilot2spd = randomNumber(pilot2.minSpeed, pilot2.maxSpeed);
    pilot2lap = pilot2spd - (pilot2.drift * pilot2spd) / 100;

    if (pilot1lap > pilot2lap) {
      pilot1win++;
    } else {
      pilot2win++;
    }
  } else if (pilot2win < pilot1win && pilot1win === pilot3win) {
    pilot1spd = randomNumber(pilot1.minSpeed, pilot1.maxSpeed);
    pilot1lap = pilot1spd - (pilot1.drift * pilot1spd) / 100;

    pilot3spd = randomNumber(pilot3.minSpeed, pilot3.maxSpeed);
    pilot3lap = pilot3spd - (pilot3.drift * pilot3spd) / 100;

    if (pilot1lap > pilot3lap) {
      pilot1win++;
    } else {
      pilot3win++;
    }
  } else if (pilot1win < pilot3win && pilot3win === pilot2win) {
    pilot3spd = randomNumber(pilot3.minSpeed, pilot3.maxSpeed);
    pilot3lap = pilot3spd - (pilot3.drift * pilot3spd) / 100;

    pilot2spd = randomNumber(pilot2.minSpeed, pilot2.maxSpeed);
    pilot2lap = pilot2spd - (pilot2.drift * pilot2spd) / 100;

    if (pilot3lap > pilot2lap) {
      pilot3win++;
    } else {
      pilot2win++;
    }
  }

  if (pilot1win > pilot2win && pilot1win > pilot3win) {
    if (pilot2win > pilot3win) {
      pilot1.racePosition = "first";
      pilot2.racePosition = "second";
      pilot3.racePosition = "third";
    } else {
      pilot1.racePosition = "first";
      pilot3.racePosition = "second";
      pilot2.racePosition = "third";
    }

    result.removeAttribute("hidden");

    result.innerHTML = `O vencedor da corrida foi o Pedro vencendo ${pilot1win} das ${laps} voltas!`;

    pilot1.wins += 1;
  } else if (pilot1win < pilot2win && pilot2win > pilot3win) {
    if (pilot1win > pilot3win) {
      pilot2.racePosition = "first";
      pilot1.racePosition = "second";
      pilot3.racePosition = "third";
    } else {
      pilot2.racePosition = "first";
      pilot3.racePosition = "second";
      pilot1.racePosition = "third";
    }

    result.removeAttribute("hidden");

    result.innerHTML = `O vencedor da corrida foi o Juca vencendo ${pilot2win} das ${laps} voltas!`;

    pilot2.wins += 1;
  } else if (pilot1win < pilot3win && pilot2win < pilot3win) {
    if (pilot1win > pilot2win) {
      pilot3.racePosition = "first";
      pilot1.racePosition = "second";
      pilot2.racePosition = "third";
    } else {
      pilot3.racePosition = "first";
      pilot2.racePosition = "second";
      pilot1.racePosition = "third";
    }

    result.removeAttribute("hidden");

    result.innerHTML = `O vencedor da corrida foi a Edna vencendo ${pilot3win} das ${laps} voltas!`;

    pilot3.wins += 1;
  }

  if (laps === 10) {
    firstExp = 200;
    secondExp = 120;
    thirdExp = 50;
  } else if (laps === 70) {
    firstExp = 220;
    secondExp = 130;
    thirdExp = 75;
  } else {
    firstExp = 250;
    secondExp = 150;
    thirdExp = 90;
  }

  allPilots.forEach((pilot) => {
    if (pilot.racePosition === "first") {
      pilot.exp += firstExp;
    } else if (pilot.racePosition === "second") {
      pilot.exp += secondExp;
    } else if (pilot.racePosition === "third") {
      pilot.exp += thirdExp;
    }

    if (pilot.exp >= 450) {
      pilot.exp -= 450;
      pilot.level += 1;

      upLevel.removeAttribute("hidden");

      upLevel.innerHTML += `<h4>Parabéns ${pilot.pilotName}!! Você acaba de subir um nível!`;
    }
  });

  reset.removeAttribute("hidden");

  console.log(allPilots);
}

function resetRace() {
  result.setAttribute("hidden", "");
  upLevel.setAttribute("hidden", "");
  reset.setAttribute("hidden", "");
  laps.setAttribute("hidden", "");

  pilot1win = 0;
  pilot2win = 0;
  pilot3win = 0;

  raceOk = [];

  upLevel.innerHTML = "";

  section.innerHTML = `<div class="content" id="pedro">
                        <h2>Pedro</h2>
                        <button id="btn1" onclick="createCar(pilot1)">Gerar Carro</button>
                      </div>
                      <div class="content" id="juca">
                        <h2>Juca</h2>
                        <button id="btn2" onclick="createCar(pilot2)">Gerar Carro</button>
                      </div>
                      <div class="content" id="edna">
                        <h2>Edna</h2>
                        <button id="btn3" onclick="createCar(pilot3)">Gerar Carro</button>
                      </div>`;
}
