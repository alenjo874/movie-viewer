import React from "react";
import { setSlideMovie, resetSlideMovie } from "../../redux/actions/index";
import { useDispatch } from "react-redux";

function HomeCard({
  backdrop_path,
  original_title,
  overview,
  slideMovieIndex,
  moviesArray,
}) {
  const dispatchNext = useDispatch();

  function handleNext() {
    if (slideMovieIndex < moviesArray.length-1) {
      dispatchNext(setSlideMovie());
    } else {
      dispatchNext(resetSlideMovie());
    }
  }

  return (
    <div className="home-card-container">
      <div className="home-backdrop">
        <img src={`https://image.tmdb.org/t/p/original${backdrop_path}`} />
      </div>
      <div className="home-movie-details">
        <h4>{original_title}</h4>
        <p>{overview}</p>
        <button onClick={handleNext}>NEXT</button>
      </div>
    </div>
  );
}

export default HomeCard;
