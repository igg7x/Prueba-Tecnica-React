const api_key = import.meta.env.VITE_API_KEY;

export const getMovies = async (searchValue) => {
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${api_key}&s=${searchValue}`
    );
    if (response.ok) {
      const data = await response.json;
      return data.Search;
    }
  } catch (error) {
    throw new Error(error);
  }
};
