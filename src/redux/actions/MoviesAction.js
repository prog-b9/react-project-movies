/* eslint-disable no-unused-vars */
import { allMovies, moviesApi, moviesApiSearch } from "../types/MoviesType";
import axios from "axios";
export const getAllMovies = () => {
  //   here use middleware useing hghir order function (insted function)
  return async (returnData) => {
    // this data [] here storage Url (API)
    await axios
      .get(moviesApi)
      .then((response) => {
        // console.log(response.data.results);
        // here send data to Movies reducer
        returnData({ type: allMovies, data: [response.data.results] });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const getMoviesSearch = (word) => {
  return async (returnDataSearch) => {
    await axios
      .get(moviesApiSearch(word))
      .then((response) => {
        returnDataSearch({
          type: allMovies,
          data: [response.data.results],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
