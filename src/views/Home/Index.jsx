import React, { useEffect, useState, useRef } from "react";
import SearchBar from "./components/SearchBar";
import { Movies } from "./components/Movies";
import { getMovies } from "../../service/movies";

const Home = () => {
  const [moviesValues, setMoviesValues] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchingApi() {
      try {
        const data = await getMovies(searchValue);
        setMoviesValues(data || []);
      } catch (error) {
        throw new Error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchingApi();
  }, [searchValue]);

  const handleSearchValue = (searchTerm) => {
    setSearchValue(searchTerm);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        justifyContent: "center",
        minWidth: "1000px",
      }}>
      <header>
        <SearchBar onSearch={handleSearchValue} />
      </header>
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}>
        <Movies loading={loading} movies={moviesValues} />
      </main>
    </div>
  );
};

export default Home;
