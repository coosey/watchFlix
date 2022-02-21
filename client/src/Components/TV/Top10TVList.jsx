import React, { useState, useEffect } from "react";
import TvCard from "./TvCard.jsx";
import axios from "axios";

const Top10TVList = () => {
  const [tv, setTV] = useState([]);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchTV = async () => {
      const response = await axios.get("/trending-tv");
      const json = await response.data.results;
      setTV(json);
    }
    fetchTV()
      .catch((err) => console.error(err));
  }, [])
  // need to fix
  useEffect(() => {
    const fetchTVCast = async () => {
      const response = await axios.get("/tv-cast");
      const json = await response.data.results;
      setCast(json);
    }
    fetchTVCast()
      .catch((err) => console.error(err));
  }, [])

  console.log("cast: ", cast)
  // console.log("TV: ", tv);
  return (
    <div>
      <TvCard tv={tv} />
    </div>
  )
}

export default Top10TVList;