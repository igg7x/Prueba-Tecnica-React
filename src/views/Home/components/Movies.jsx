import React from "react";

import MovieCard from "./MovieCard";

export const ListOfMovies = ({ movies }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "16px",
        padding: 0,
        margin: 0,
      }}>
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          title={movie.Title}
          release_date={movie.Year}
          poster={movie.Poster}
        />
      ))}
    </div>
  );
};

export const NoRenderMovies = () => {
  return <h3>No hay Resultados para esta busqueda</h3>;
};

export const Movies = ({ loading, movies }) => {
  console.log(movies);
  return loading ? (
    "Loading Results"
  ) : movies.length === 0 ? (
    <NoRenderMovies />
  ) : (
    <ListOfMovies movies={movies} />
  );
};
