import React, { useEffect, useState, useRef } from "react";
import SearchBar from "./components/SearchBar";
import { Movies } from "./components/Movies";
import { getMovies } from "../../service/movies";

const Home = () => {
  const [moviesValues, setMoviesValues] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState(false);

  useEffect(() => {
    async function fetchingApi() {
      try {
        const data = await getMovies(searchValue);
        if (sort) {
          data.sort((a, b) => b.Year - a.Year);
        }
        setMoviesValues(data || []);
      } catch (error) {
        throw new Error(error);
      } finally {
        setLoading(false);
      }
    }
    console.log("fetchingApi");
    fetchingApi();
  }, [searchValue, sort]);

  const handleCheckSort = () => {
    setSort(!sort);
  };
  const handleSearchValue = (searchTerm) => {
    setSearchValue(searchTerm);
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
