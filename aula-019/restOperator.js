function createArray(...elements) {
  let newArr = [];

  newArr.push(...elements);

  console.log(newArr);
}

arr = [1, 2, 15, 30, 999, "legal", 85];

createArray(...arr);
