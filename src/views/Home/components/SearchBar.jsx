import { useSearch } from "../../../hooks/useSearch";

const SearchBar = ({ onSearch }) => {
  const { search, updateSearch, error } = useSearch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = new FormData(e.target).get("search");
    if (!error) onSearch(searchValue);
  };

  const handleInputChange = (e) => {
    updateSearch(e.target.value);
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
    </form>
  );
};

export default SearchBar;
