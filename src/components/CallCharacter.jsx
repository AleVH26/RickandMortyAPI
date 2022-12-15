import { useState } from "react";

export const CallCharacter = ({ onNewCharacter }) => {
  const [inputValue, setInputValue] = useState("");

  const onChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;

    onNewCharacter(inputValue.trim());
    setInputValue("");
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={inputValue}
          placeholder="Enter a character."
          onChange={onChange}
        />
        <button className="searchBtn" onClick={onSubmit}>
          Search
        </button>
      </form>
    </>
  );
};
