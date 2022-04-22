import moviesReducer from "./movies";
import homeMovieReducer from "./homeMovie";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  moviesReducer,
  homeMovieReducer,
});

export default allReducers;
