import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import css from "./SearchBar.module.css";

// const errorNotify = () => toast.error("Input can't be empty");

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      // przekazanie wartości pola do propsa
      onSubmit(query);
      setQuery("");
    } else {
      toast.error("Input can't be empty!");
    }
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="query"
          value={query}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
      <Toaster />
    </header>
  );
};

export default SearchBar;
