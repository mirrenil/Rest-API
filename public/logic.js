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
