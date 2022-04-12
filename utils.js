import fs, { writeFile } from "fs";

export function matchasInStock() {
  const data = fs.readFileSync("./matcha.json");
  const matchaData = JSON.parse(data);
  return matchaData;
}

export function saveMatcha(list) {
  fs.writeFileSync("./matcha.json", JSON.stringify(list, null, 2), (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Matcha has been updated");
  });
}

export function findExistingID(id) {
  let matchas = matchasInStock();

  let specificMatcha = matchas.find((matcha) => {
    return matcha.id === id;
  });
  if (specificMatcha) {
    return specificMatcha;
  } else {
    return false;
  }
}
