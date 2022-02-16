import React from "react";
import MovieList from "./MovieList.jsx";
import "./Styles/Movies.scss";

const Movies = () => {
  return (
    <div>
      <h2>Top 10 Movies</h2>
      <MovieList />
    </div>
  )
}

export default Movies;