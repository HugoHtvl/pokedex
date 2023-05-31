const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function Pokemoncard() {
  // Sélectionne le premier élément du tableau pokemonList
  const pokemon = pokemonList[0];

  return (
    <figure>
      {pokemon.imgSrc != undefined ? (
        // Si l'image du Pokémon est définie, affiche une balise img avec la source et l'attribut alt correspondants
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        // Sinon, affiche un paragraphe avec le texte "???"
        <p>???</p>
      )}
      {/* Affiche le nom du Pokémon */}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

export default Pokemoncard;
