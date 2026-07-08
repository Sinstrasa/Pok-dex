function pokémonCardtemplate(index, sprite) {
  return `
        <button class="pokémon" id="card${+index}">
            <div class="sprites"><img src="${sprite}" alt="Picture of Pokémon Nr. ${index}"></div>
            <p>#${index}</p>
        </button>
        `;
}
