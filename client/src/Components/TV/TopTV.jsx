import React from "react";
import Top10TVList from "./Top10TVList.jsx";
import "./Styles/TopTV.scss";

const TopTV = () => {
  return (
    <div className="top-tv">
      <h2>Top 10 TV Shows</h2>
      <Top10TVList />
    </div>
  )
}

export default TopTV;