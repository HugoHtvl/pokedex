// prettier-ignore

const NavBar = (props) => {
const { handleClickPokemon, pokemonList, pokemonIndex } = props;

setTimeout(() => {
  if (pokemonList[pokemonIndex].name === "pikachu") alert("Pika Pikachu !!!");
}, "100")

  return (
    <>
    {pokemonList.map((pokemon, index) => (
      <button key={index} onClick={() => handleClickPokemon(index)}>
        {pokemon.name}
      </button>
    ))}
  </>
  )
};

export default NavBar;
