import React, { useState, useEffect } from "react";
import ActionMovies from "../Genres/ActionMovies.jsx";
import "./MovieList.scss";
import axios from "axios";

const MovieList = () => {

  return (
    <div>
      <ActionMovies />
    </div>
  )
}

export default MovieList;