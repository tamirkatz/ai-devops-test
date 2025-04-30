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

app.post("/Tamir", (req, res) => {
  if (req.body["Tamir is the king"] === true) {
    res.send("you are awesome");
  } else {
    res.send("you are lame !");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});