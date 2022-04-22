export function setMovies(movies) {
  return {
    type: "SET",
    payload: movies,
  };
}

export function setSlideMovie() {
  return {
    type: "INCREMENT",
  };
}

export function setBackSlide() {
  return {
    type: "DECREMENT",
  };
}

export function resetSlideMovie() {
  return {
    type: "RESET",
  };
}

export function setLastSlide(last) {
  return {
    type: "LAST",
    payload: last,
  };
}
