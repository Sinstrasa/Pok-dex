const BASE_URL = "https://pokeapi.co/api/v2/";

function initialise() {
  addPokémon();
  search();
}

async function addPokémon() {
  let contentRef = document.getElementById("content");
  contentRef.innerHTML = ``;
  for (let index = 1; index < 21; index++) {
    let sprite = await getSprite(index);
    let type = await getType(index);
    contentRef.innerHTML += pokémonCardtemplate(index, sprite);
    bgColor(index, type);
  }
}

async function getSprite(index) {
  let response = await fetch(BASE_URL + "pokemon/" + index);
  let responseAsJson = await response.json();
  return responseAsJson.sprites.other.home.front_default;
}

async function getType(index) {
  let response = await fetch(BASE_URL + "pokemon/" + index);
  let responseAsJson = await response.json();
  return responseAsJson.types[0].type.name;
}

// Checking for specific elements and its paths
async function search() {
  let response = await fetch(BASE_URL + "pokemon/" + 1);
  let responseAsJson = await response.json();
  console.log(responseAsJson.types[0].type.name);
}
