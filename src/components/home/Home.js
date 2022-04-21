import React from "react";
import { useSelector } from "react-redux";
import HomeCard from "./HomeCard";
import { v4 as uuidv4 } from "uuid";

function Home() {
  const moviesArray = useSelector((state) => state.moviesReducer);
  console.log(moviesArray);
  const displayHomeMovies = moviesArray.map((movie) => {
    return <HomeCard key={uuidv4()} {...movie} />;
  });
  return <div>{displayHomeMovies}</div>;
}

export default Home;
