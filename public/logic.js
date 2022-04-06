window.addEventListener("load", (event) => {
  console.log("Welcome to Matcha Heaven!");
});
document
  .getElementsByTagName("button")[0]
  .addEventListener("click", async (event) => {
    let matchas = await getMatchas();
    console.log(matchas);
  });

async function getMatchas() {
  try {
    let response = await fetch("http://localhost:3000/api/matcha");
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
