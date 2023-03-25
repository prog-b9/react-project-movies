/* eslint-disable no-unused-vars */
/* eslint-disable no-unreachable */
import {
  allMovies,
  searchMovies,
  pageMovies,
  moviesApiSearch,
} from "../types/MoviesType";

// create variable (one : storage data all movies , two : what page the movies? )
// const initValue = { movies: [], pageCount: 0 };
// const initValue = { movies: [], pageCount: 0 };

export const moviesReducer = (state = { movies: [] }, action) => {
  switch (action.type) {
    case allMovies:
      // return { movies: action.data, pageCount: action.pages };
      return { movies: action.data };
    default:
      return state;
  }
};
