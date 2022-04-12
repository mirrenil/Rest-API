import { METHODS } from "http";

document.getElementsById("get").addEventListener("click", async (e) => {
  let response = await makeRequest("http://localhost:3000/matchas", "GET");
  let allMatchas = response.json();
  e.preventDefeult();
  console.log(allMatchas);
});

document.getElementById("save").addEventListener("click", async () => {
  let body = {
    name: "Matcha",
    price: 10,
  };
});

const makeRequest = async (url, method, body) => {
  await fetch(url, {
    method,
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });

  return response.json();
};

/*
window.addEventListener("load", (e) => {
  console.log("Welcome to Matcha Heaven!");
});
document.getElementById("button").addEventListener("click", async () => {
  let matchas = await getMatchas();
});

async function getMatchas() {
  try {
    let response = await fetch("http://localhost:3000/api/matcha");
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
 */
