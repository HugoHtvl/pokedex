/* eslint-disable react/jsx-no-target-blank */
// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { useState, useEffect } from "react";
import MyTitle from "./components/MyTitle";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  useEffect(() => {
    alert("Hello pokemon trainer 🙂");
  }, []);

  const [pokemonList, setPokemonList] = useState([
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
  ]);

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
