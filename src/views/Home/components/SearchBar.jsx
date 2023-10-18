import { useCallback } from "react";
import { useSearch } from "../../../hooks/useSearch";
import debounce from "just-debounce-it";

const SearchBar = ({ onSearch, sort, onCheckSort, getMOvies }) => {
  const { search, updateSearch, error } = useSearch();

  const debounceGetMovies = useCallback(
    debounce((search) => getMOvies(search), 300),
    [getMOvies]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = new FormData(e.target).get("search");
    if (!error) onSearch(searchValue);
  };

  const handleInputChange = (e) => {
    updateSearch(e.target.value);
    debounceGetMovies(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label
        htmlFor="search"
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "#fff",
        }}>
        {" "}
        Search Movies
      </label>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          margin: "0 auto",
          padding: "0 20px",
          boxSizing: "border-box",
          gap: "1rem",
        }}>
        <input
          onChange={handleInputChange}
          value={search}
          name="search"
          type="text"
          id="search"
          autoComplete="off"
          placeholder=" FastX, Avengers , StarWars..."
        />
        <button type="submit">🔍</button>
      </div>
      {error && <span style={{ color: "red" }}>{error}</span>}
      <div style={{ textAlign: "center" }}>
        <label htmlFor="sort">Order By Year Released</label>
        <input
          type="checkbox"
          id="sort"
          onChange={onCheckSort}
          checked={sort}
        />
      </div>
    </form>
  );
};

export default SearchBar;
