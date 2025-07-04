import React, { useState } from "react";


interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <form
      className="search-bar"
      onSubmit={handleSearch}
      style={{
        display: "flex",
        gap: "0.5rem",
        marginBottom: "1rem",
      }}
    >
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Buscar recetas..."
        className="search-bar-input"
      />
      <button type="submit" className="search-bar-button">
        Buscar
      </button>
    </form>
  );
};

export default SearchBar;