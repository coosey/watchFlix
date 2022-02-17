import React from "react";
import "./App.scss";
import NavBar from "./NavBar/NavBar.jsx";
import TopMovies from "./Movies/TopMovies.jsx";
import TopTV from "./TV/TopTV.jsx";

const App = () => {
  return (
    <div>
      <NavBar />
      <TopMovies />
      <TopTV />
    </div>
  )
}

export default App;