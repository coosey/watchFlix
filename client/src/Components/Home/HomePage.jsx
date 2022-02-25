import React from "react";
import TopMovies from "./Movies/TopMovies.jsx";
import TopTV from "./TV/TopTV.jsx";

const HomePage = () => {
  return (
    <div className="home-page">
      <TopMovies />
      <TopTV />
    </div>
  )
}

export default HomePage;