import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard.jsx";
import axios from "axios";
import "./Styles/TopMovies.scss";

const Top10Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await axios.get("/movies");
      const json = await response.data.results;
      setMovies(json);
    }
    fetchMovie()
      .then(() => setLoading(false))
      .catch((err) => console.error(err));
  }, [])

  return (
    <div>
      { loading ? <div className="loader"></div> : <MovieCard movies={movies} /> }
    </div>
  )
}

export default Top10Movies;