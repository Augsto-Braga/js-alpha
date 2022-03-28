const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  function randomIntNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const delay = randomIntNumber(0, 5000);
  const randomNumber = randomIntNumber(0, 10);

  setTimeout(() => {
    res.json(randomNumber);
  }, delay);
});

app.listen(3333, () => {
  console.log("Server is running!");
});
