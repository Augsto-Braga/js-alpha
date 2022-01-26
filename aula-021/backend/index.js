const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const allRoute = require("./allRoute");
const birthRoute = require("./birthRoute");
const sectorRoute = require("./sectorRoute");
const registerRoute = require("./registerRoute");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", allRoute);
app.get("/birth", birthRoute);
app.get("/sector", sectorRoute);
app.post("/register", registerRoute);

app.listen(3333, () => {
  console.log("Server is running!");
});
