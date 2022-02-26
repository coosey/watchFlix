import React, { useState, useEffect } from "react";
import { Card } from "antd";
import "./Styles/Card.scss";
import axios from "axios";

const ActionMovies = () => {
  const [action, setAction] = useState([]);
  const { Meta } = Card;

  useEffect(() => {
    const getActionMovies = async () => {
      const response = await axios.get("/movies/action");
      const json = await response.data.results;
      setAction(json);
    }
    getActionMovies()
      .catch((err) => console.error(err));
  }, []);

  console.log(action)

  return (
    <div className="wrapper">
      <h2>Action</h2>
      <div className="action-movies">
        {action.map((movie) => (
          <Card
            className="movie-card"
            key={movie.id}
            bordered={true}
            cover={
              <img
                style={{ width: 262, height: 300 }}
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              />
            }
          >
            <Meta title={movie.original_title} />
          </Card>
        ))}
      </div>
    </div>
  )
}

export default ActionMovies;