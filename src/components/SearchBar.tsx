import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <form className="d-flex mb-3" onSubmit={handleSearch}>
      <input
        type="text"
        className="form-control me-2"
        placeholder="Buscar recetas..."
        value={input}
        onChange={handleInputChange}
      />
      <button className="btn btn-primary" type="submit">
        Buscar
      </button>
    </form>
  );
};

export default SearchBar;
