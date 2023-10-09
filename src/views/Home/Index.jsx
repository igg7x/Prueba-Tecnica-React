import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import { Movies } from "./components/Movies";

const Home = () => {
  const api_key = import.meta.env.VITE_API_KEY;
  const [moviesValues, setMoviesValues] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchingApi() {
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${api_key}&s=${search}`
        );
        if (response.ok) {
          const data = await response.json();
          setMoviesValues(data.results);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchingApi();
  }, [searchValue]);
  const handleSearchValue = (searchTerm) => {
    setSearchValue(searchTerm);
  };
  return (
    <div>
      <header>
        <SearchBar onSearch={handleSearchValue} />
      </header>
      <main>
        <Movies loading={loading} movies={moviesValues} />
      </main>
    </div>
  );
};

export default Home;
