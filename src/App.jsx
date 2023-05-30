/* eslint-disable react/jsx-no-target-blank */
// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import MyTitle from "./components/MyTitle";
import Pokemoncard from "./components/Pokemoncard";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <MyTitle />
        <Pokemoncard />
      </div>
    </>
  );
}

export default App;
