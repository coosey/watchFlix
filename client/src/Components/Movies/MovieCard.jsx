import React, { useState } from "react";
import { Card, Spin } from "antd";
import "./Styles/MovieCard.scss";

const MovieCard = ({movies}) => {
  const { Meta } = Card;

  return (
    <div className="movie-container">
      { movies.map(movie => (
        <Card
          key={movie.id}
          className="movie-card"
          style={{ width: 262, height: 400 }}
          cover={
            <img
              style={{ width: 262, height: 300 }}
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            />
          }
        >
          <Meta
            title={movie.original_title}
            description={`Rating: ${movie.vote_average}`}
          />
        </Card>
      ))
      }
    </div>
  )
}

export default MovieCard;