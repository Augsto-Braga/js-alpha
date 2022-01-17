function concat(a, b) {
  return a + b;
}

const arrayA = [
  ["oi", "tudo", "bem, "],
  ["eu", "estou", "bem"],
];

console.log(concat(...arrayA));
