import React, { useState, useEffect } from "react";
import axios from "axios";

const Top10TVList = () => {
  const [tv, setTV] = useState([]);

  // useEffect(() => {
  //   const fetchTV = async () => {
  //     const response = await axios.get("/");
  //     const json = await response.data.results;
  //     setTV(json);
  //   }
  //   fetchTV()
  //     .catch((err) => console.error(err));
  // }, [])

  // console.log("TV: ", tv);
  return (
    <div></div>
  )
}

export default Top10TVList;