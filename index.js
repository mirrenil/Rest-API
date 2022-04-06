const express = require("express");
const app = express();
const port = 3000;

app.use("/", (req, res, next) => {
  console.log("hello BAE I see you");
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
  res.send("hello there");
  req.json(matchas);
});

// add new matcha to menu
app.post("/api/matcha", (req, res) => {
  console.log(req.body);
  matchas.push(req.body);
  res.status(201).send("new matcha");
});

// update matcha
app.put("/api/matchas/:id", (req, res) => {
  res.send("update matcha");
});

// remove a matcha drink
app.delete("/api/matchas/:id", (req, res) => {
  res.send("Matcha removed");
});

app.listen(port, () => console.log(`This app is running on port ${port}!`));
