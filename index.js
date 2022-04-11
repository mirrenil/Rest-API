import express from "express";
import matchaRoutes from "./routes/matchaRoutes.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/matchas", matchaRoutes);

app.get("/", (req, res) => {
  res.send("Hello Matcha lovers!");
});

// Global felhanterare
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: err.message });
});

app.use("/", express.static("public"));

app.listen(port, () => console.log(`This app is running on port ${port}!`));
