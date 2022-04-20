import "./style/style.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import NavBar from "./components/navigation/NavBar";
import Movies from "./components/movies/Movies";
import TvSeries from "./components/tvSeries/TvSeries";

function App() {
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
