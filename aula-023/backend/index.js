const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", routes.calculateRoute);

app.listen(3333, () => {
  console.log("Server is running!");
});
