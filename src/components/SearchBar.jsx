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
      <div className={css.inputWrapper}>
        <form onSubmit={handleSubmit} className={css.searchForm}>
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
          <button type="submit" className={css.searchButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.099zm-5.442 1.207a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z" />
            </svg>
          </button>
        </form>
      </div>
      <Toaster />
    </header>
  );
};

export default SearchBar;
