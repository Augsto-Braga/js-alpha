const main = document.querySelector("main");
let result = document.createElement("div");

let pilot1 = {
  minSpeed: 0,
  maxSpeed: 0,
  drift: 0,
  pilotName: "pedro",
  carType: "",
  button: "btn1",
};

let pilot2 = {
  minSpeed: 0,
  maxSpeed: 0,
  drift: 0,
  carType: "",
  pilotName: "juca",
  button: "btn2",
};

let pilot3 = {
  minSpeed: 0,
  maxSpeed: 0,
  drift: 0,
  carType: "",
  pilotName: "edna",
  button: "btn3",
};

let raceOk = [];

let pilot1win = 0;
let pilot2win = 0;
let pilot3win = 0;

function randomIntNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function createCar(pilot) {
  let typeOf = randomIntNumber(1, 100);

  if (typeOf <= 5) {
    pilot.carType = "Super Sport";
    pilot.minSpeed = randomIntNumber(140, 160);
    pilot.maxSpeed = randomIntNumber(210, 230);
    pilot.drift = randomNumber(1, 1.75).toFixed(2);
  } else if (typeOf > 5 && typeOf <= 40) {
    pilot.carType = "Sport";
    pilot.minSpeed = randomIntNumber(125, 145);
    pilot.maxSpeed = randomIntNumber(195, 215);
    pilot.drift = randomNumber(2, 3).toFixed(2);
  } else {
    pilot.carType = "Popular";
    pilot.minSpeed = randomIntNumber(110, 130);
    pilot.maxSpeed = randomIntNumber(180, 200);
    pilot.drift = randomNumber(3, 4).toFixed(2);
  }

  const button = document.getElementById(pilot.button);

  button.setAttribute("hidden", "");

  const content = document.getElementById(pilot.pilotName);

  content.innerHTML += `<h3>Tipo de carro: ${pilot.carType}
                       <h3>Velocidade mínima: ${pilot.minSpeed}km/h</h3>
                       <h3>Velocidade máxima: ${pilot.maxSpeed}km/h</h3>
                       <h3>Derrapagem: ${pilot.drift}%</h3>`;

  raceOk.push("ok");
  if (raceOk.length == 3) {
    const laps = document.querySelector(".laps");

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
    main.appendChild(result);

    result.setAttribute("class", "result");

    result.innerHTML = `O vencedor da corrida foi o Pedro vencendo ${pilot1win} das ${laps} voltas!`;
  } else if (pilot1win < pilot2win && pilot2win > pilot3win) {
    main.appendChild(result);

    result.setAttribute("class", "result");

    result.innerHTML = `O vencedor da corrida foi o Juca vencendo ${pilot2win} das ${laps} voltas!`;
  } else if (pilot1win < pilot3win && pilot2win < pilot3win) {
    main.appendChild(result);

    result.setAttribute("class", "result");

    result.innerHTML = `O vencedor da corrida foi a Edna vencendo ${pilot3win} das ${laps} voltas!`;
  }
}
