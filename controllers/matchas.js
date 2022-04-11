import { v4 as uuidv4 } from "uuid";
import fs from "fs";
import { saveMatcha, findExistingID, matchasInStock } from "../utils.js";

export const getMatchas = (req, res) => {
  const data = fs.readFileSync("matcha.json");
  const matchas = JSON.parse(data);
  res.json(matchas);
};

export const createMatcha = (req, res) => {
  const newMatcha = req.body;

  const data = fs.readFileSync("matcha.json");
  const matchas = JSON.parse(data);

  matchas.push({ ...newMatcha, id: uuidv4() });

  fs.writeFileSync("matcha.json", JSON.stringify(matchas));

  res.status(201).send(`${newMatcha.name} added to menu`);
};

export const getMatcha = (req, res) => {
  const { id } = req.params;

  if (!findExistingID(id)) {
    res.status(404).send("Sorry, the provided ID does not match any matcha");
  }
  res.send(findExistingID(id));
};

export const deleteMatcha = (req, res) => {
  const { id } = req.params;

  if (!findExistingID(id)) {
    res.status(404).send("Sorry, the provided ID does not match any matcha");
  }
  let matchas = matchasInStock();
  let matchaToDelete = matchas.find((matcha) => matcha.id === id);
  let updatedListOfMatchas = matchas.filter((matcha) => matcha.id !== id);
  saveMatcha(updatedListOfMatchas);
  // res.send("Matcha has been deleted");
  res.json(`Matcha with the id ${id} has been deleted`);

  matchas = matchas.filter((matcha) => matcha.id !== id);

  // res.json(`Matcha with the id ${id} has been deleted`);
};

export const updateMatcha = (req, res) => {
  const { id } = req.params;

  if (!findExistingID(id)) {
    res.status(404).send("Sorry, the provided ID does not match any matcha");
    return;
  }
  const updatedMatcha = matchasInStock().map((matcha) => {
    if (matcha.id === id) {
      return req.body;
    }
    return matcha;
  });
  saveMatcha(updatedMatcha);
  res.send("The Matcha has been updated");

  //   res.json(`Matcha with the id ${id} has been updated`);
};
