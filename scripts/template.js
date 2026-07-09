function pokémonCardtemplate(index, sprite, name) {
  return `
        <button class="pokémon" id="card${+index}">
            <p>#${index}</p>
            <section class="sprite_n_types">
                <div class="sprites"><img src="${sprite}" alt="Picture of Pokémon Nr. ${index}"></div>
                <div class="all_types" id="allTypes${+index}"></div>
            </section>
            <p>${name}</p>
        </button>
        `;
}
