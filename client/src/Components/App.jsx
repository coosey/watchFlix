import React from "react";
import "./App.scss";
import NavBar from "./NavBar/NavBar.jsx";
import Movies from "./Movies/Movies.jsx";

const App = () => {
  return (
    <div>
      <NavBar />
      <Movies />
    </div>
  )
}

export default App;