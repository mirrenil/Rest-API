import fs, { writeFile } from "fs";

export function matchasInStock() {
  const data = fs.readFileSync("matcha.json");
  const matchas = JSON.parse(data);
  return matchas;
}

export function saveMatcha(list) {
  fs.writeFileSync("./matcha.json", JSON.stringify(list), (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Matcha has been updated");
  });
}

export function findExistingID(id) {
  let matchas = matchasInStock();

  let thisMatcha = matchas.find((matcha) => {
    return matcha.id === id;
  });
  if (thisMatcha) {
    return thisMatcha;
  } else {
    return false;
  }
}
