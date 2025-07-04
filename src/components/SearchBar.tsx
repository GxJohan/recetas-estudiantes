import { useState } from 'react';

type Props = {
  onSearch: (text: string) => void;
};

export default function SearchBar({ onSearch }: Props) {
  const [text, setText] = useState('');

  const handleClick = () => {
    onSearch(text);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="🔍 Buscar recetas por nombre..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={handleClick}
        className="search-button"
      >
        🔍 Buscar
      </button>
    </div>
  );
}
