/* eslint-disable react/jsx-no-target-blank */
// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { useState } from "react";
import MyTitle from "./components/MyTitle";
import Pokemoncard from "./components/Pokemoncard";
import "./App.css";

const pokemonList = [
  {
    name: "bulbasaur",

    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },

  {
    name: "charmander",

    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },

  {
    name: "squirtle",

    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },

  {
    name: "pikachu",

    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },

  {
    name: "mew",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const handleClickPrevious = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);
    }
  };
  const handleClickNext = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(pokemonIndex + 1);
    }
  };

  // prettier-ignore
  return (
    <>
      <div>
        <MyTitle />
        <Pokemoncard pokemon={pokemonList[pokemonIndex]} />
        {pokemonIndex > 0 ? <button onClick={handleClickPrevious}>Previous</button> : <p></p>}
        {pokemonIndex < pokemonList.length - 1 ? <button onClick={handleClickNext}>Next</button> : <p></p>}
      </div>
    </>
  );
}

export default App;
