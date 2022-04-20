import React, { useEffect, useState } from "react";
import "./style/style.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import NavBar from "./components/navigation/NavBar";
import Movies from "./components/movies/Movies";
import TvSeries from "./components/tvSeries/TvSeries";

function App() {
  const [moviesArray, setMoviesArray] = useState([]);

  const movieAPIKey = "api_key=1b754eb2e7ec29055fdde6d441153fa4";
  const baseUrl = "https://api.themoviedb.org/3";
  const popularUrl =
    baseUrl + "/discover/movie?sort_by=popularity.desc&" + movieAPIKey;

  useEffect(() => {
    fetch(popularUrl)
      .then((res) => res.json())
      .then((data) => setMoviesArray(data.results));
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/movies">
          <Movies moviesArray={moviesArray} />
        </Route>
        <Route exact path="/tv_series">
          <TvSeries />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
