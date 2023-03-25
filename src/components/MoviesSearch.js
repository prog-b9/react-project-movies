/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllMovies, getMoviesSearch } from "../redux/actions/MoviesAction";

export default function MoviesSearch() {
  const myDispatch = useDispatch();
  const [onSearch, setOnSearch] = useState();

  useEffect(() => {
    // console.log(onSearch);
    if (onSearch === "") {
      myDispatch(getAllMovies);
    } else {
      myDispatch(getMoviesSearch(onSearch));
    }
  }, [onSearch]);
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{ backgroundColor: "#ececec " }}
      >
        <div className="container">
          <div className="w-100">
            <form className="d-flex w-100" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search..."
                aria-label="Search"
                onChange={(ele) => {
                  setOnSearch(ele.target.value);
                }}
              />
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
