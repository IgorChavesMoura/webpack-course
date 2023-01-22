import React, { Suspense, useCallback }  from "react";
import "./App.scss";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
//import DetailsPage from "./components/DetailsPage/DetailsPage.jsx";
import Homepage from "./components/Homepage/Homepage.jsx";
//import BookPage from "./components/BookPage/BookPage.jsx";

const HomePage = React.lazy(() => import("homepage/HomePage"));
const DetailsPage = React.lazy(() => import("details/DetailsPage"));
const BookingPage = React.lazy(() => import("booking/BookingPage"));

const App = () => {

  const history = useHistory();
  const location = useLocation();

  const movieClicked = useCallback((movie) => {
    console.log("Movie clicked", movie);
    history.push(`details/${movie.id}`);
  }, [history]);

  return (
    <Suspense fallback={null} >
      <Switch>
        <Route path="/details/:id">
          <DetailsPage routing={{ history, location }} ></DetailsPage>
        </Route>
        <Route path="/book">
          <BookingPage></BookingPage>
        </Route>
        <Route path="/">
          <HomePage movieClicked={movieClicked} routing={{ history, location }} ></HomePage>
        </Route>
      </Switch>
    </Suspense>
  );
};

export default App;
