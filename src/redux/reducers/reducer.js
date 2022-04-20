import moviesReducer from "./movies";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  moviesReducer,
});

export default allReducers;
