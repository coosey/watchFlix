import React from "react";
import Top10MovieList from "./Top10MovieList.jsx";
import "./Styles/TopMovies.scss";

const TopMovies = () => {
  return (
    <div className="top-movies">
      <h2>Top 10 Movies</h2>
      <Top10MovieList />
    </div>
  )
}

export default TopMovies;