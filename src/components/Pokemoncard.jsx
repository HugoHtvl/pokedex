/* eslint-disable */

function Pokemoncard(props) {
  return (
    <figure>
      {props.pokemon.name != undefined ? <img src={props.pokemon.imgSrc} alt={props.pokemon.name} /> : <p>???</p>}
      <figcaption>{props.pokemon.name}</figcaption>
    </figure>
  );
}

export default Pokemoncard;
