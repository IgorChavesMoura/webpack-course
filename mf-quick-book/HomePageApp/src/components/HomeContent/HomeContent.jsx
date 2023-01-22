import React, { Suspense, useEffect, useState } from "react";

import RoutingContext from "../../utils/RoutingProvider";

import QuickBooking from "../QuickBooking/QuickBooking.jsx";

const MovieCard = React.lazy(() => import("components/MovieCard"));

import "./HomeContent.scss";

const dummyItem = [{name:"Dummy Movie"}];

const API_URL = 'http://localhost:5555';

const HomeContent = (props) => {
  const [movies, setMovies] = useState(dummyItem);

  useEffect(() => {
      const url = `${API_URL}/movies`;

      fetch(url) 
        .then(
          res => {
            res.json()
              .then(
                data => {
                  setMovies(data);
                }
              );
          }
        );
    
  }, []);

  const movieClicked = (item) => {
    if (typeof props.movieClicked === "function") {
      props.movieClicked(item);
    }
  };

  const renderMovieList = () => {
    let items = movies.map((item) => {

      const { name, imageUrl } = item;

      return (
        <div onClick={() => movieClicked(item)} key={name}>
          <MovieCard title={name} imageUrl={imageUrl}  />
        </div>
      );
    });

    return items;
  };

  return (
    <div className="home-content-container">
      <RoutingContext.Provider value={props.routing} >
        <QuickBooking></QuickBooking>
        <div className="movies-container">
          <Suspense fallback={null} >
            {renderMovieList()}
          </Suspense>
        </div>
      </RoutingContext.Provider>
    </div>
  );
};

export default HomeContent;
