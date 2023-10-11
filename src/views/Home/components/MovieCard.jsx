import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ title, release_date, poster, movieId }) => {
  return (
    <div
      style={{
        textAlign: "center",
      }}>
      <div style={{ margin: 0 }}>
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{release_date}</p>
      </div>
      <img
        style={{
          marginTop: "16px",
          borderRadius: "8px",
          // opacity: "0.6",
        }}
        src={poster}
        className="card-img-top"
        alt="movie-poster-image"
        draggable="false"
      />
      <button>
        <Link to={`/detail/${movieId}`}>More Info</Link>
      </button>
    </div>
  );
};

export default MovieCard;
