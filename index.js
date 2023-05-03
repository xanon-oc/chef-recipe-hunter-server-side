const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const data = require("./data/data.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the indian Cuisine . The Dish Dash server is running");
});

app.get("/all", (req, res) => {
  res.send(data);
});

app.get("/chef_Details/:id", (req, res) => {
  const id = req.params.id;
  const selectedNews = data.find((n) => n.id === id);
  res.send(selectedNews);
});

app.listen(port, () => {
  console.log(`Dragon API is running on port : ${port}`);
});
