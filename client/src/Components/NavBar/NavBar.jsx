import React from "react";
import Title from "./Links/Title.jsx";
import Movies from "./Links/Movies.jsx";
import TV from "./Links/TV.jsx";
import SearchBar from "./SearchBar.jsx";
import SignIn from "./SignIn.jsx";
import "./Styles/NavBar.scss";

const NavBar = () => {
  return (
    <div className="navbar">
      <Title />
      <Movies />
      <TV />
      <SignIn />
    </div>
  )
}

export default NavBar;