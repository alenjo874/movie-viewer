import React from "react";

function HomeCard({ backdrop_path, original_title, overview }) {
  return (
    <div className="home-card-container">
      <div className="home-backdrop">
        <img src={`https://image.tmdb.org/t/p/original${backdrop_path}`} />
      </div>
      <div className="home-movie-details">
        <h4>{original_title}</h4>
        <p>{overview}</p>
      </div>
    </div>
  );
}

export default HomeCard;
