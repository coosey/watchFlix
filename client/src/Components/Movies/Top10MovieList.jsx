import React, { useState, useEffect } from "react";
import API_KEY from "../../../../config/config.js";
import axios from "axios";

const Top10Movies = () => {
  const [movies, setMovies] = useState([]);
  const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await axios.get(url);
      const json = await response.data.results;
      setMovies(json);
    }
    fetchMovie()
      .catch((err) => console.error(err));
  }, [])

  // console.log("movies: ",movies)
  return (
    <div></div>
  )
}

export default Top10Movies;