/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../redux/actions/MoviesAction";

export default function MoviesList() {
  const myData = useSelector((state) => state.movies[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingOneonly, setIsLoadingOneonly] = useState(true);

  const myDispatch = useDispatch();

  useEffect(() => {
    myDispatch(getAllMovies());
    if (isLoadingOneonly) {
      setTimeout(() => {
        setIsLoading(!isLoading);
      }, 2000);
      setIsLoadingOneonly(!isLoadingOneonly);
    }
  }, [isLoadingOneonly]);

  return (
    <div>
      <div className="row m-auto  row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4  row-cols-md-3  my-5 g-3  container">
        {/* Start Movies List  */}

        {myData &&
          myData.map((item, i) =>
            isLoading === false ? (
              <div className="col" key={i}>
                <div
                  className="rounded placeholder-glow"
                  aria-hidden="true"
                  id="container-card"
                >
                  <div
                    className="placeholder rounded-top m-0"
                    id="img-movies"
                  ></div>
                  <div className="card-body rounded-bottom p-3">
                    <p className="card-text placeholder-glow">
                      <span className="placeholder placeholder-lg rounded-1 col-10"></span>
                      <span className="placeholder placeholder-sm rounded-1 col-6"></span>

                      <span className="placeholder placeholder-sm rounded-1 col-9"></span>
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="col " key={i}>
                <div className="rounded" id="container-card">
                  {item.poster_path === null ? (
                    <img
                      src={"images/error-img-3.png"}
                      className="rounded-top align-center"
                      id="img-movies"
                      alt={"img - " + item.title}
                    />
                  ) : (
                    <img
                      src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                      className="rounded-top"
                      id="img-movies"
                      alt={"img - " + item.title}
                    />
                  )}
                  <div
                    className="card-body rounded-bottom p-3"
                    id="card-details"
                  >
                    <h5
                      className="card-title mb-3 fw-bold text-nowrap overflow-hidden"
                      style={{ textOverflow: "ellipsis" }}
                    >
                      {item.title}
                    </h5>
                    <h6 className="card-subtitle fw-normal d-flex mb-2">
                      <div className="fw-bold me-1">Language</div> :{" "}
                      {item.original_language}
                    </h6>
                    <h6 className="card-subtitle fw-normal d-flex mb-2">
                      <div className="fw-bold me-1">Release Date</div>:{" "}
                      {item.release_date}
                    </h6>
                  </div>
                </div>
              </div>
            )
          )}
        {/* End Movies List  */}
      </div>
    </div>
  );
}
