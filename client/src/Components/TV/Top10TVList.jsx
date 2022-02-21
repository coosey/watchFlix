import React, { useState, useEffect } from "react";
import TvCard from "./TvCard.jsx";
import axios from "axios";

const Top10TVList = () => {
  const [tv, setTV] = useState([]);

  useEffect(() => {
    const fetchTV = async () => {
      const response = await axios.get("/tv");
      const json = await response.data.results;
      setTV(json);
    }
    fetchTV()
      .catch((err) => console.error(err));
  }, [])

  return (
    <div>
      <TvCard tv={tv} />
    </div>
  )
}

export default Top10TVList;