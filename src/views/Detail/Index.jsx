import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetMovie } from "../../hooks/useGetMovie";
const Detail = () => {
  const { movieId } = useParams();
  const { movie, getMovieInfo } = useGetMovie();
  useEffect(() => {
    getMovieInfo(movieId);
  }, [movieId]);

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem",
        padding: "1rem",
      }}>
      <article>
        <h3>{movie.Title}</h3>
        <p>{movie.Released}</p>
        <p>{movie.Overview}</p>
        <img src={movie.Poster} alt="movie-poster" />
      </article>
      <article
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          gap: "1rem",
          padding: "1rem",
        }}>
        <div>
          <h3>Director</h3>
          <p>{movie.Director}</p>
          <h3>Writer</h3>
          <p>{movie.Writer}</p>
        </div>
        <div>
          <h3>Main Cast</h3>
          <ul>
            {movie.Actors.split(",").map((actor) => (
              <li key={actor}>{actor}</li>
            ))}
          </ul>
        </div>
        <div>
          <p>
            <i>{movie.Plot}</i>
          </p>
        </div>
      </article>
    </section>
  );
};

export default Detail;
