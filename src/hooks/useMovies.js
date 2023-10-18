import { useState, useCallback, useMemo, useRef } from "react";
import { getMovies } from "../service/movies";
export function useMovies(search, sort) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const previusSearch = useRef(search);

  const getMoviesValues = useCallback(async (search) => {
    if (previusSearch.current === search) return;

    try {
      setLoading(true);
      previusSearch.current = search;
      const values = await getMovies(search);
      setMovies(values || []);
    } catch (error) {
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const sortMovies = useMemo(() => {
    return sort ? [...movies].sort((a, b) => a.Year - b.Year) : movies;
  }, [sort, movies]);

  return { movies: sortMovies, getMoviesValues, loading };
}
