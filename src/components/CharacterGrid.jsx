import { useEffect, useState } from "react";
import { getData } from "../helpers/getData";
import { Character } from "./Character";
import { Pagination } from "./Pagination";

export const CharacterGrid = ({ name }) => {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  let initialUrl;

  const handleName = (name) => {
    name.length > 1
      ? (initialUrl = `https://rickandmortyapi.com/api/character/?name=${name}`)
      : (initialUrl = "https://rickandmortyapi.com/api/character/");
  };

  const getCharacters = async (initialUrl) => {
    const newCharacters = await getData(initialUrl);
    setCharacters(newCharacters);
    setInfo(newCharacters[0].info);
  };

  const onPrev = () => {
    initialUrl = info.prev;
    getCharacters(initialUrl);
  };

  const onNext = () => {
    initialUrl = info.next;
    getCharacters(initialUrl);
  };

  useEffect(() => {
    handleName(name);
    getCharacters(initialUrl);
  }, []);

  return (
    <>
      <Pagination
        prev={info.prev}
        next={info.next}
        onPrev={onPrev}
        onNext={onNext}
      />
      <div className="charactersGrid">
        {characters.map((character) => (
          <Character key={character.id} {...character} />
        ))}
      </div>

      <Pagination
        prev={info.prev}
        next={info.next}
        onPrev={onPrev}
        onNext={onNext}
      />
    </>
  );
};
