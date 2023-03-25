/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import MoviesList from "./components/MoviesList";
import MoviesSearch from "./components/MoviesSearch";
import { getAllMovies } from "./redux/actions/MoviesAction";

function App() {
  // state.moves this is in file MoviesReducer
  const myData = useSelector((state) => state.movies);

  return (
    <div className="App">
      <MoviesSearch />
      <MoviesList />
    </div>
  );
}

export default App;
