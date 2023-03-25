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
  // const [dataMovies, setDataMovies] = useState([]);

  const myDispatch = useDispatch();

  // useEffect(() => {
  //   // setDataMovies(myData);
  //   // console.log(myData[0][0]["backdrop_path"]);
  //   // setDataMovies(myData);
  //   setDataMovies(myData);
  //   console.log(myData);
  //   // myDispatch(getAllMovies());
  // }, [myData]);

  return (
    <div className="App">
      <MoviesSearch/>
      <MoviesList/>



      {/* <h1>{myData.results}</h1> */}
      {/* {myData.map((item, i) => (
        <div key={i}>
          <img src={`https://image.tmdb.org/t/p/original${item[i]["backdrop_path"]}`} width="200px" height={"200px"}/>
       
        </div>
      ))} */}
      {/* <button
        className="btn btn-primary m-5"
        onClick={() => myDispatch(getAllMovies())}
      >
        Change
      </button> */}
      {/* <img className="mt-5" src={"/jr8tSoJGj33XLgFBy6lmZhpGQNu.jpg"} style={{width:"200px" , height:"200px"}} alt="2" /> */}
    </div>
  );
}

export default App;
