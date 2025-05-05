import { useState, type ChangeEvent, type FC, type FormEvent } from "react";

interface SearchBarProps {
  onSubmit: (term: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSubmit }) => {
  const [term, setTerm] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(term);
    setTerm("");
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
