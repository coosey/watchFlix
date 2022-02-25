import React, { useState, useEffect } from "react";
import axios from "axios";

const ActionMovies = () => {
  const [action, setAction] = useState([]);

  useEffect(() => {
    const getActionMovies = async () => {
      const response = await axios.get("/movies/action");
      const json = await response.data.results;
      setAction(json);
    }
    getActionMovies()
      .catch((err) => console.error(err));
  }, []);

  // console.log(action)

  return (
    <div>

    </div>
  )
}

export default ActionMovies;