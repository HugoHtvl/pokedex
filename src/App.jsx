/* eslint-disable react/jsx-no-target-blank */
// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { useState, useEffect } from "react";
import MyTitle from "./components/MyTitle";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";
import "./App.css";

const pokemonList = [
  {
    name: "Bulbasaur",

    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },

  {
    name: "Charmander the GOAT",

    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },

  {
    name: "Squirtle",

    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },

  {
    name: "Pikachu",

    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },

  {
    name: "Mew",
  },
];

function App() {
  useEffect(() => {
    alert("Hello pokemon trainer 🙂");
  }, []);

  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleClickPokemon = (index) => {
    setPokemonIndex(index);
  };

  return (
    <>
      <div>
        <MyTitle />
        <NavBar
          handleClickPokemon={handleClickPokemon}
          pokemonList={pokemonList}
          pokemonIndex={pokemonIndex}
        />
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      </div>
    </>
  );
}

export default App;
