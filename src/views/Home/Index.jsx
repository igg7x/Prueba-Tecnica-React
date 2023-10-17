import React, { useEffect, useState, useRef } from "react";
import SearchBar from "./components/SearchBar";
import { Movies } from "./components/Movies";
import { getMovies } from "../../service/movies";
import { useMovies } from "../../hooks/useMovies";

const Home = () => {
  const [sort, setSort] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const {
    movies: moviesValues,
    loading,
    getMoviesValues,
  } = useMovies(searchValue, sort);

  const handleCheckSort = () => {
    setSort(!sort);
  };
  const handleSearchValue = (searchTerm) => {
    setSearchValue(searchTerm);
    getMoviesValues(searchTerm);
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <header>
        <SearchBar
          onSearch={handleSearchValue}
          sort={sort}
          onChangeSort={handleCheckSort}
        />
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
