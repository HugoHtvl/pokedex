/* eslint-disable */
import PropTypes from "prop-types";

function Pokemoncard(props) {
  
  const pokemon = props.pokemon

  return (
    <figure>
      {pokemon.imgSrc != undefined ? <img src={pokemon.imgSrc} alt={pokemon.name} /> : <p>???</p>}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

Pokemoncard.propTypes = {
  props: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
}

export default Pokemoncard;