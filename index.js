const { v4: uuidv4 } = require("uuid");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use("/", (req, res, next) => {
  console.log("hello I see you");
  next();
});

app.use("/", express.static("public"));
app.use(express.json());

const matchas = [];

app.get("/api/matchas", (req, res) => {
  res.send(matchas);
  console.log(matchas);
  //req.json(matchas);
});

// find matcha - GET
app.get("/api/matchas/:id", (req, res) => {
  const matcha = matchas.find((m) => m.id === parseInt(req.params.id));
  if (!matcha) return res.status(404).send("Matcha not found");
  res.json(matcha);
  console.log(req.params.id);
});

// add new matcha to menu - POST
app.post("/api/matchas", (req, res) => {
  const newMatcha = req.body;

  matchas.push({ ...newMatcha, id: uuidv4() });

  res.status(201).send(`${newMatcha.name} added to menu`);
});

// update matcha - PATCH
app.put("/api/matchas/:id", (req, res) => {
  const matcha = matchas.find((m) => m.id === parseInt(req.params.id));
  if (!matcha)
    return res.status(404).send("Matcha with the given ID not found");

  matcha.name = req.body.name;
  const updatedMatcha = { ...matcha, ...req.body };
  res.json(updatedMatcha);
  res.send(updatedMatcha);
});

// remove a matcha drink - DELETE
app.delete("/api/matchas/:id", (req, res) => {
  const matcha = matchas.find((m) => m.id === parseInt(req.params.id));
  if (!matcha) return res.status(404).send("Matcha not found");

  const index = matchas.indexOf(matcha);
  matchas.splice(index, 1);

  res.send(matcha);
});

app.listen(port, () => console.log(`This app is running on port ${port}!`));
