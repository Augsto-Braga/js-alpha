function randomIntNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function showValue() {
  const arr = [];
  let num = 0;

  for (i = 0; i < 10; i++) {
    num = randomIntNumber(0, 100);
    arr.push(num);
  }

  console.log(arr);
  console.log(Math.max(...arr));
}

showValue();
