function homeMovieReducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return ++state;
    default:
      return state;
  }
}

export default homeMovieReducer;
