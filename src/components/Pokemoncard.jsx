/* eslint-disable */

const Pokemoncard = (props) => {
  const pokemon = props.pokemon
  return (
    <figure>
      {pokemon.name != undefined ? <img src={pokemon.imgSrc} alt={pokemon.name} /> : <p>???</p>}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

export default Pokemoncard;
