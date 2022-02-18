import React from "react";
import TopMovies from "../Movies/TopMovies.jsx";
import TopTV from "../TV/TopTV.jsx";

const Home = () => {
  return (
    <div className="home-page">
      <TopMovies />
      <TopTV />
    </div>
  )
}

export default Home;