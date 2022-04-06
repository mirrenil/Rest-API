window.addEventListener("load", (event) => {
  console.log("Welcome to Matcha Heaven!");
});
document.getElementById("button").addEventListener("click", (event) => {
  getMatchas();
});

async function getMatchas() {
  try {
    let response = await fetch("http://localhost:3000/api/matcha");
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
