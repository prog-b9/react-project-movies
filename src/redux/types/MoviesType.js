export const allMovies = "allMovies";
export const moviesApi =
  "https://api.themoviedb.org/3/movie/upcoming?api_key=b22a56335202f466208f4b4396a7ea39&language=en-US&page=1";
export const moviesApiSearch = (word) => {
  return `https://api.themoviedb.org/3/search/movie?api_key=b22a56335202f466208f4b4396a7ea39&query=${word}&language=en-US&page=1&include_adult=false`;
};


// https://app.getpostman.com/join-team?invite_code=107f5654f29291ba4af93266790f4293
