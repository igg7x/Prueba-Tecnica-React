import React from "react";

const MovieCard = ({ title, release_date, backdrop_path }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        margin: "0 auto",
        boxSizing: "border-box",
      }}>
      <div>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{release_date}</p>
      </div>
      <img
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "1rem",
          opacity: "0.6",
        }}
        src={backdrop_path}
        className="card-img-top"
        alt="movie poster image"
        draggable="false"
      />
    </div>
  );
};

export default MovieCard;
