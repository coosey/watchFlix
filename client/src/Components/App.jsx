import React from "react";
import "./App.scss";
import HomePage from "./Home/HomePage.jsx";
import MoviePage from "./MoviePage/MoviePage.jsx";
import TvPage from "./TvPage/TvPage.jsx";
import SignIn from "./NavBar/SignIn.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

const App = () => {

  return (
    <Router>
      <nav>
        <Link
          to="/"
          className="header-title"
        >
          WatchFlix
        </Link>
        <Link
          to="/movie-page"
          className="header-link"
        >
          Movies
        </Link>
        <Link
          to="/tv-page"
          className="header-link"
        >
          TV
        </Link>
        <Link
          to="/sign-in"
          className="header-link"
        >
          sign in
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie-page" element={<MoviePage />} />
        <Route path="/tv-page" element={<TvPage />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </Router>
  )
}

export default App;