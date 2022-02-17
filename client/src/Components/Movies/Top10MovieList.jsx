import React, { useState, useEffect } from "react";
import axios from "axios";

const Top10Movies = () => {
  const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   const fetchMovie = async () => {
  //     const response = await axios.get("/");
  //     const json = await response.data.results;
  //     setMovies(json);
  //   }
  //   fetchMovie()
  //     .catch((err) => console.error(err));
  // }, [])

  // console.log("movies: ",movies)
  return (
    <div></div>
  )
}

export default Top10Movies;