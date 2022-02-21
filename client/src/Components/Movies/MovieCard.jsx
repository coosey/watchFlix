import React, { useState, useEffect } from "react";
import { Card, Spin } from "antd";
import "./Styles/MovieCard.scss";
import genres from "./movieGenres.js";
import axios from "axios";

const MovieCard = ({movies}) => {
  const [movieCast, setMovieCast] = useState([]);
  const { Meta } = Card;

  useEffect(() => {
    const fetchMovieCast = async () => {
      const response = await axios.get("/movies/476669");
      const json = await response.data;
      setMovieCast(json);
    }
    fetchMovieCast()
      .catch((err) => console.error(err))
  }, [])

  console.log("MOVIE CAST: ", movieCast)

  return (
    <div className="movie-container">
      { movies.slice(0, 10).map(movie => (
        <Card
          className="movie-card"
          key={movie.id}
          bordered={true}
          style={{ width: 262, height: 420, boxShadow: "0 0 4px #eee" }}
          cover={
            <img
              style={{ width: 262, height: 300 }}
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            />
          }
        >
          <Meta title={movie.original_title} />
          {movie.genre_ids.map(id => (
            <span key={id}>
              {genres[id]}
            </span>
          ))}
          <p
            className="movie-avg"
            style={{
              color: (movie.vote_average >= 8) ? "green" : (movie.vote_average < 8 && movie.vote_average >= 6) ? "darkOrange" : "red"
            }}
          >
            {movie.vote_average}
          </p>
        </Card>
      ))}
    </div>
  )
}

export default MovieCard;