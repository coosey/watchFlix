import React from "react";
import "./App.scss";
import NavBar from "./NavBar/NavBar.jsx";
import TopMovies from "./Movies/TopMovies.jsx";

const App = () => {
  return (
    <div>
      <NavBar />
      <TopMovies />
    </div>
  )
}

export default App;