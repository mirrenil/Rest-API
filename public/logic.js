document
  .getElementsByTagName("button")[0]
  .addEventListener("click", async (event) => {
    let matchas = await getMatchas();
    console.log(matchas);
  });

async function getMatchas() {
  let response = await fetch("http://localhost:3000/api/matcha");
  return await response.json();
}
