const express = require("express");
const allRoute = require("./allRoute");
const birthRoute = require("./birthRoute");
const sectorRoute = require("./sectorRoute");

const app = express();

app.get("/", allRoute);
app.get("/birth", birthRoute);
app.get("/sector", sectorRoute);

app.listen(3333, () => {
  console.log("Server is running!");
});
