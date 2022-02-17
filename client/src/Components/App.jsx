import React from "react";
import "./App.scss";
import Home from "./Home/Home.jsx";
import NavBar from "./NavBar/NavBar.jsx";
import MoviePage from "./Movies/MoviePage.jsx";
import TvPage from "./TV/TvPage.jsx";
import SignIn from "./NavBar/SignIn.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
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
        to="/movies"
        className="header-link"
        >
          Movies
        </Link>
        <Link
        to="/tv"
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
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MoviePage />} />
        <Route path="/tv" element={<TvPage />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </Router>
  )
}

export default App;