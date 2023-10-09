import React from "react";

import MovieCard from "./MovieCard";

export const ListOfMovies = ({ movies }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "1rem",
        padding: "1rem",
      }}>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          release_date={movie.released}
          backdrop_path={movie.poster}
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
  ) : movies === undefined ? (
    <NoRenderMovies />
  ) : (
    <ListOfMovies movies={movies} />
  );
};
