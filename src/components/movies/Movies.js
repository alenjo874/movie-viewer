import React from "react";
import { v4 as uuidv4 } from "uuid";

function movies({ moviesArray }) {
  console.log(moviesArray);
  const displayMovies = moviesArray.map((movie) => {
    return <div key={uuidv4()}>{movie.original_title} </div>;
  });

  return <div>{displayMovies}</div>;
}

export default movies;
