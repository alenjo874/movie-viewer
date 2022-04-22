import React, { useEffect } from "react";
import {
  setSlideMovie,
  resetSlideMovie,
  setBackSlide,
  setLastSlide,
} from "../../redux/actions/index";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

function HomeCard({
  id,
  backdrop_path,
  poster_path,
  original_title,
  overview,
  slideMovieIndex,
  moviesArray,
}) {
  const dispatchNext = useDispatch();
  const length = moviesArray.length - 1;

  useEffect(() => {
    fetch(
      `http://api.themoviedb.org/3/movie/${id}/videos?api_key=1b754eb2e7ec29055fdde6d441153fa4`
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  function handleNext() {
    if (slideMovieIndex < length) {
      dispatchNext(setSlideMovie());
    } else {
      dispatchNext(resetSlideMovie());
    }
  }

  function handleBack() {
    if (slideMovieIndex === 0) {
      dispatchNext(setLastSlide(length));
    } else {
      dispatchNext(setBackSlide());
    }
  }

  // useEffect(() => {
  //   const timer = setTimeout(() => handleNext(), 30000);
  // }, []);

  return (
    <div className="home-card-container">
      <div className="home-backdrop">
        <img src={`https://image.tmdb.org/t/p/original${backdrop_path}`} />
      </div>
      <div className="home-movie">
        <div className="home-movie-details">
          <motion.h2
            initial={{ y: -25, opacity: 0 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.26,
                stiffness: 50,
                type: "spring",
                ease: "easeIn",
              },
            }}
          >
            {original_title}
          </motion.h2>
          <motion.p
            initial={{ y: -25, opacity: 0 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.1,
                duration: 0.26,
                stiffness: 50,
                type: "spring",
                ease: "easeIn",
              },
            }}
          >
            {overview}
          </motion.p>
        </div>
        <motion.div
          className="home-poster"
          initial={{ y: -25, opacity: 0 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.26,
              stiffness: 50,
              type: "spring",
              ease: "easeIn",
            },
          }}
        >
          <img
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt="movie poster"
          />
        </motion.div>
      </div>

      <div className="panel next-panel" onClick={handleNext}></div>
      <div className="panel back-panel" onClick={handleBack}></div>
    </div>
  );
}

export default HomeCard;
