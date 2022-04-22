import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import HomeCard from "./HomeCard";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { setSlideMovie } from "../../redux/actions/index";

function Home() {
  const moviesArray = useSelector((state) => state.moviesReducer);
  const slideMovieIndex = useSelector((state) => state.homeMovieReducer);
  const dispatch = useDispatch();
  console.log(moviesArray);

  // useEffect(() => {
  //   setTimeout(() => {
  //     dispatch(setSlideMovie());
  //   }, "20000");
  // }, []);

  const displayHomeMovies = moviesArray.map((movie) => {
    return <HomeCard key={uuidv4()} {...movie} />;
  });

  return <div>{displayHomeMovies[slideMovieIndex]}</div>;
}

export default Home;
