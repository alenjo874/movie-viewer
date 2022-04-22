export function setMovies(movies) {
  return {
    type: "SET",
    payload: movies,
  };
}

export function slideMovie() {
  return {
    type: "INCREMENT"
  }
}