import React, { useEffect, useState } from "react";
import "./style/style.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import NavBar from "./components/navigation/NavBar";
import Movies from "./components/movies/Movies";
import TvSeries from "./components/tvSeries/TvSeries";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { setMovies } from "./redux/actions/index";

function App() {
  const moviesArray = useSelector((state) => state.moviesReducer);
  const dispatch = useDispatch();
  console.log(moviesArray);
  const movieAPIKey = "api_key=1b754eb2e7ec29055fdde6d441153fa4";
  const baseUrl = "https://api.themoviedb.org/3";
  const popularUrl =
    baseUrl + "/discover/movie?sort_by=popularity.desc&" + movieAPIKey;

  useEffect(() => {
    fetch(popularUrl)
      .then((res) => res.json())
      .then((data) => dispatch(setMovies(data.results)));
  }, []);

  // const displayMovies = moviesArray.map((movie) => {
  //   return <div key={uuidv4()}>{movie.original_title} </div>;
  // });

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/movies">
          <Movies />
        </Route>
        <Route exact path="/tv_series">
          <TvSeries />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
