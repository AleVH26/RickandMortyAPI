import { useState } from "react";
import { CallCharacter } from "./components/CallCharacter";
import { CharacterGrid } from "./components/CharacterGrid";
import logo from "./img/logo.png";

export const App = () => {
  const [characters, setCharacters] = useState([""]);

  const onNewCharacter = (newCharacter) => {
    if (characters.includes(newCharacter)) return;

    setCharacters([newCharacter]);
  };


  return (
    <>
      <div className="logoContainer">
        <img
          width={300}
          className="logo"
          onClick={() => setCharacters([""])}
          src={logo}
          alt="Rick and Morty's Logo."
        />
      </div>

      <CallCharacter onNewCharacter={onNewCharacter} />

      {characters.map((character) => (
        <CharacterGrid key={character} name={character} />
      ))}
    </>
  );
};
