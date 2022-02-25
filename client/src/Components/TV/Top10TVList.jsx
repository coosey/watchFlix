import React, { useState, useEffect } from "react";
import TvCard from "./TvCard.jsx";
import axios from "axios";
import "./Styles/TopTV.scss";

const Top10TVList = () => {
  const [tv, setTV] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTV = async () => {
      const response = await axios.get("/tv");
      const json = await response.data.results;
      setTV(json);
    }
    fetchTV()
      .then(() => setLoading(false))
      .catch((err) => console.error(err));
  }, [])

  return (
    <div>
      { loading ? <div className="loader"></div> : <TvCard tv={tv} /> }
    </div>
  )
}

export default Top10TVList;