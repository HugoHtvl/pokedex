/* eslint-disable react/jsx-no-target-blank */
// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import MyTitle from "./components/MyTitle";
import Pokemoncard from "./components/Pokemoncard";
import "./App.css";

const pokemonList = [
  {
    name: "bulbizarre",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "salamèche",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "mew",
  },
];

function App() {
  return (
    <>
      <div>
        <MyTitle />
        <Pokemoncard pokemon={pokemonList[1]} />
      </div>
    </>
  );
}

export default App;
