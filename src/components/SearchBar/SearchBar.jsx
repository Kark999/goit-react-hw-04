import { useState } from "react";
import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { addToast } = toast();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!searchTerm.trim()) {
      addToast("Please enter a search term.", { icon: "⚠️" });
      return;
    }

    onSubmit(searchTerm);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <header className={css.header}>
        <form className={css.form} onSubmit={handleSubmit}>
          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchTerm}
            onChange={handleChange}
          />
          <button className={css.submitBtn} type="submit">
            🔍
          </button>
        </form>
      </header>
      {/* <Toaster /> */}
    </>
  );
};

export default SearchBar;
