import React, { useState, useEffect } from "react";
import API_KEY from "../../../../config/config.js";
import axios from "axios";

const Top10TVList = () => {
  const [tv, setTV] = useState([]);
  const url = `https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}`;

  useEffect(() => {
    const fetchTV = async () => {
      const response = await axios.get(url);
      const json = await response.data.results;
      setTV(json);
    }
    fetchTV()
      .catch((err) => console.error(err));
  }, [])

  console.log("TV: ", tv);
  return (
    <div></div>
  )
}

export default Top10TVList;