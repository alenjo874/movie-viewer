function homeMovieReducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":  
      return ++state;
    case "RESET":
        return 0  
    default:
      return state;
  }
}

export default homeMovieReducer;
