import React from "react";

const MovieCard = ({ title, release_date, poster }) => {
  console.log(poster);
  return (
    <div>
      <div
        style={{
          margin: "0.5rem",
        }}>
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{release_date}</p>
      </div>
      <img
        style={{
          marginTop: "16px",
          borderRadius: "1rem",
          opacity: "0.6",
        }}
        src={poster}
        className="card-img-top"
        alt="movie poster image"
        draggable="false"
      />
    </div>
  );
};

export default MovieCard;
