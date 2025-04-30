- Content:
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Test message");
});

app.get("/api", (req, res) => {
  res.send("ofri");
});

app.get("/Tamir", (req, res) => {
  res.send("Tamir route");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});