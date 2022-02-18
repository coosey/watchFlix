import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard.jsx";
import axios from "axios";

const Top10Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await axios.get("/trending-movies");
      const json = await response.data.results;
      setMovies(json);
    }
    fetchMovie()
      .catch((err) => console.error(err));
  }, [])

  return (
    <div>
      <MovieCard movies={movies} />
    </div>
  )
}

export default Top10Movies;