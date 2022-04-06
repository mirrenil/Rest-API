const express = require("express");
const { json } = require("express/lib/response");
const app = express();
const port = 3000;

app.use("/", (req, res, next) => {
  console.log("hello I see you");
  next();
});

app.use("/", express.static("public"));
app.use(express.json);

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

app.get("/api/matcha", (req, res) => {
  req.json(matchas);
});

// add new matcha to menu
app.post("/api/matcha", (req, res) => {
  console.log(req.body);
  matchas.push(req.body);
  res.status(201).send({
    type: "post",
    name: req.body.name,
    price: req.body.price,
    id: req.body.id,
  });
});

// update matcha
app.put("/api/matchas/:id", (req, res) => {
  const matcha = matchas.find(
    (matcha) => matcha.id === parseInt(req.params.id)
  );
});

// remove a matcha drink
app.delete("/api/matchas/:id", (req, res) => {
  res.send("Matcha removed");
});

app.listen(port, () => console.log(`This app is running on port ${port}!`));
