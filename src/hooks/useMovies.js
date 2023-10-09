export function useMovies(fetchedMovies) {
  console.log(fetchedMovies);
  const mappedMovies = fetchedMovies.map((movie) => ({
    id: movie.id,
    title: movie.title,
    description: movie.overview,
    poster: movie.poster_path,
    rating: movie.vote_average,
    releaseDate: movie.release_date,
  }));
  return { movies: mappedMovies };
}
