const main = document.querySelector("main");
let result = document.createElement("div");

const pilot1 = {
  minSpeed: 150,
  maxSpeed: 230,
  drift: 3,
};

const pilot2 = {
  minSpeed: 120,
  maxSpeed: 260,
  drift: 5,
};

const pilot3 = {
  minSpeed: 180,
  maxSpeed: 220,
  drift: 1,
};

let pilot1win = 0;
let pilot2win = 0;
let pilot3win = 0;

function race(maxLaps) {
  let laps = maxLaps;

  function ramdomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  for (let i = 0; i < laps; i++) {
    let pilot1spd = ramdomNumber(pilot1.minSpeed, pilot1.maxSpeed);
    let pilot1lap = pilot1spd - (pilot1.drift * pilot1spd) / 100;

    let pilot2spd = ramdomNumber(pilot2.minSpeed, pilot2.maxSpeed);
    let pilot2lap = pilot2spd - (pilot2.drift * pilot2spd) / 100;

    let pilot3spd = ramdomNumber(pilot3.minSpeed, pilot3.maxSpeed);
    let pilot3lap = pilot3spd - (pilot3.drift * pilot3spd) / 100;

    if (pilot1lap > pilot2lap && pilot1lap > pilot3lap) {
      pilot1win++;
    } else if (pilot2lap > pilot1lap && pilot2lap > pilot3lap) {
      pilot2win++;
    } else {
      pilot3win++;
    }

    console.log(
      pilot1lap,
      pilot1win,
      pilot2lap,
      pilot2win,
      pilot3lap,
      pilot3win
    );
  }

  if (pilot3win < pilot1win && pilot1win === pilot2win) {
    pilot1spd = ramdomNumber(pilot1.minSpeed, pilot1.maxSpeed);
    pilot1lap = pilot1spd - (pilot1.drift * pilot1spd) / 100;

    pilot2spd = ramdomNumber(pilot2.minSpeed, pilot2.maxSpeed);
    pilot2lap = pilot2spd - (pilot2.drift * pilot2spd) / 100;

    if (pilot1lap > pilot2lap) {
      pilot1win++;
    } else {
      pilot2win++;
    }
    console.log("VOLTA EXTRA!");
    console.log(pilot1lap, pilot1win, pilot2lap, pilot2win);
  } else if (pilot2win < pilot1win && pilot1win === pilot3win) {
    pilot1spd = ramdomNumber(pilot1.minSpeed, pilot1.maxSpeed);
    pilot1lap = pilot1spd - (pilot1.drift * pilot1spd) / 100;

    pilot3spd = ramdomNumber(pilot3.minSpeed, pilot3.maxSpeed);
    pilot3lap = pilot3spd - (pilot3.drift * pilot3spd) / 100;

    if (pilot1lap > pilot3lap) {
      pilot1win++;
    } else {
      pilot3win++;
    }
    console.log("VOLTA EXTRA!");
    console.log(pilot1lap, pilot1win, pilot3lap, pilot3win);
  } else if (pilot1win < pilot3win && pilot3win === pilot2win) {
    pilot3spd = ramdomNumber(pilot3.minSpeed, pilot3.maxSpeed);
    pilot3lap = pilot3spd - (pilot3.drift * pilot3spd) / 100;

    pilot2spd = ramdomNumber(pilot2.minSpeed, pilot2.maxSpeed);
    pilot2lap = pilot2spd - (pilot2.drift * pilot2spd) / 100;

    if (pilot3lap > pilot2lap) {
      pilot3win++;
    } else {
      pilot2win++;
    }
    console.log("VOLTA EXTRA!");
    console.log(pilot2lap, pilot2win, pilot3lap, pilot3win);
  }

  if (pilot1win > pilot2win && pilot1win > pilot3win) {
    main.appendChild(result);

    result.setAttribute("class", "result");

    result.innerHTML = `O vencedor da corrida foi o Piloto 1 vencendo ${pilot1win} das ${laps} voltas!`;
  } else if (pilot1win < pilot2win && pilot2win > pilot3win) {
    main.appendChild(result);

    result.setAttribute("class", "result");

    result.innerHTML = `O vencedor da corrida foi o Piloto 2 vencendo ${pilot2win} das ${laps} voltas!`;
  } else if (pilot1win < pilot3win && pilot2win < pilot3win) {
    main.appendChild(result);

    result.setAttribute("class", "result");

    result.innerHTML = `O vencedor da corrida foi o Piloto 3 vencendo ${pilot3win} das ${laps} voltas!`;
  }
}
