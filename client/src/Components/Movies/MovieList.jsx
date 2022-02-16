import React, { useState, useEffect } from "react";
import axios from "axios";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  // const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await axios.get(url)
      const json = await data.json()
      setMovies(json)
    }
    fetchMovie()
      .catch((err) => console.error(err));
  }, [])

  return (
    <div></div>
  )
}

export default MovieList;