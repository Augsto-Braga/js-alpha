function createMultiplyer(x) {
  return function (y) {
    return x * y;
  };
}

let multiplyBy5 = createMultiplyer(5);

console.log(multiplyBy5(8));
//Resultado: 40
