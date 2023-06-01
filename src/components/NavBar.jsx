// prettier-ignore

const NavBar = (props) => {
const { pokemonIndex, handleClickPrevious, handleClickNext, pokemonList } = props;

setTimeout(() => {
  if (pokemonList[pokemonIndex].name === "pikachu") alert("Pika Pikachu !!!");
}, "100")

  return (
  <>
    {pokemonIndex > 0 ? <button onClick={handleClickPrevious}>Previous</button> : <p></p>}
    {pokemonIndex < pokemonList.length - 1 ? <button onClick={handleClickNext}>Next</button> : <p></p>}
  </>
  )
};

export default NavBar;
