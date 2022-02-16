import React from "react";
import "./Styles/NavBar.scss";
import { Input } from "antd";


const SearchBar = () => {
  const { Search } = Input;
  return (
   <div className="searchBar">
    <Search
      placeholder="Search for a movie or TV show"
      enterButton
      // onSearch
    />
   </div>
  )
}

export default SearchBar;