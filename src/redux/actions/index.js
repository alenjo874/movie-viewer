export function setMovies(movies) {
  return {
    type: "SET",
    payload: movies,
  };
}

export function setSlideMovie() {
  return {
    type: "INCREMENT"
  }
}

