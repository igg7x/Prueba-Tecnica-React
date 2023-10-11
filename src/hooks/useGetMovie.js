import { useState } from "react";
import { getMovie } from "../service/movies";

export function useGetMovie() {
  const [movie, setMovie] = useState({});
  async function getMovieInfo(id) {
    const movie = await getMovie(id);
    setMovie(movie);
  }
  return { movie, getMovieInfo };
}
