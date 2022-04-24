import React, { useEffect, useState } from "react";
import {
  setSlideMovie,
  resetSlideMovie,
  setBackSlide,
  setLastSlide,
} from "../../redux/actions/index";
import { useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

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

  const [trailer, setTrailer] = useState();
  const [showTrailer, setShowTrailer] = useState();

  useEffect(() => {
    fetch(
      `http://api.themoviedb.org/3/movie/${id}/videos?api_key=1b754eb2e7ec29055fdde6d441153fa4`
    )
      .then((res) => res.json())
      .then((data) => setTrailer(data.results[0].key));
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

  const movieTrailer = (
    <iframe
      src={`https://www.youtube.com/embed/${trailer}`}
      width="853"
      height="480"
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen
      title="video"
    />
  );

  const trailerPopUp = (
    <div className="update-pro-popup">
      <motion.div
        className="submit-confirm trailer-popup"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.25,
            type: "show",
            ease: "easeIn",
          },
        }}
        exit={{
          y: "10%",
          opacity: 0,
          transition: { duration: 0.25, ease: "easeOut" },
        }}
      >
        <div className="cancel-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            className="x-svg"
            onClick={() => setShowTrailer(false)}
          >
            <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
          </svg>
        </div>

        <div>{movieTrailer}</div>
      </motion.div>
    </div>
  );

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
          <div>
            <button onClick={() => setShowTrailer(true)}>Show Trailer</button>
          </div>
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
      <AnimatePresence>{showTrailer ? trailerPopUp : null}</AnimatePresence>
      <div className="panel next-panel" onClick={handleNext}></div>
      <div className="panel back-panel" onClick={handleBack}></div>
    </div>
  );
}

export default HomeCard;
