function homeMovieReducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return ++state;
    case "DECREMENT":
      return --state;
    case "LAST":
      return action.payload;
    case "RESET":
      return 0;
    default:
      return state;
  }
}

export default homeMovieReducer;
