import { useState } from "react";
import { getMovies } from "../service/movies";
export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const getMoviesValues = async (search) => {
    try {
      setLoading(true);
      const values = await getMovies(search);
      setMovies(values || []);
    } catch (error) {
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  };

  const sortMovies = () => {
    return sort ? [...movies].sort((a, b) => a.Year - b.Year) : movies;
  };

  return { movies: sortMovies(), getMoviesValues, loading };
}
