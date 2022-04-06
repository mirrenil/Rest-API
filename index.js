const Joi = require("joi");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use("/", (req, res, next) => {
  console.log("hello BAE I see you");
  next();
});

app.use("/", express.static("public"));
app.use(express.json());

const matchas = [
  {
    name: "Matcha Latte",
    price: 45,
    id: 1,
  },
  {
    name: "Matcha Iced Latte",
    price: 45,
    id: 2,
  },
  {
    name: "Matcha CBD Latte",
    price: 75,
    id: 3,
  },
  {
    name: "Matcha Lavender Iced Latte",
    price: 75,
    id: 4,
  },
];

app.get("/api/matchas", (req, res) => {
  res.send(matchas);
  //req.json(matchas);
});
// find matcha
app.get("/api/matcha/:id", (req, res) => {
  const matcha = matchas.find((m) => m.id === parseInt(req.params.id));
  if (!matcha) return res.status(404).send("Matcha not found");
  res.send(matcha);
});

// add new matcha to menu
app.post("/api/matchas", (req, res) => {
  const { error } = validateMatcha(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const matcha = {
    id: matchas.length + 1,
    name: req.body.name,
  };
  matchas.push(matcha);
  res.send(matcha);
  res.status(201).send("new matcha");
  //   console.log(req.body);
  //   matchas.push(req.body);
});

// update matcha
app.put("/api/matchas/:id", (req, res) => {
  const matcha = matchas.find((m) => m.id === parseInt(req.params.id));
  if (!matcha)
    return res.status(404).send("Matcha with the given ID not found");

  const { error } = validateMatcha(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  matcha.name = req.body.name;
  res.send(matcha);
});

// remove a matcha drink
app.delete("/api/matchas/:id", (req, res) => {
  const matcha = matchas.find((m) => m.id === parseInt(req.params.id));
  if (!matcha) return res.status(404).send("Matcha not found");

  const index = matchas.indexOf(matcha);
  matchas.splice(index, 1);

  res.send(matcha);
});

app.listen(port, () => console.log(`This app is running on port ${port}!`));

function validateMatcha(matcha) {
  const schema = {
    name: Joi.string().min(5).required(),
  };
  return Joi.validate(matcha, schema);
}
