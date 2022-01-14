let result = 1;

function fatorial(num) {
  if (num <= 1) {
    return result;
  }
  return num * fatorial(num - 1);
}

console.log(fatorial(10));
