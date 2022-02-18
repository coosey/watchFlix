import React, { useState } from "react";
import { Card, Spin } from "antd";
import "./Styles/MovieCard.scss";

const MovieCard = ({movies}) => {
  const { Meta } = Card;

  return (
    <div className="movie-container">
      { movies.map(movie => (
        <Card
          className="movie-card"
          key={movie.id}
          bordered={true}
          style={{ width: 262, height: 400 }}
          cover={
            <img
              style={{ width: 262, height: 300 }}
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            />
          }
        >
          <Meta title={movie.original_title} />
          <p>Genre</p>
          <p
            className="movie-avg"
            style={{
              color: (movie.vote_average >= 8) ? "green" : (movie.vote_average < 8 && movie.vote_average >= 6) ? "darkOrange" : "red"
            }}
          >
            {movie.vote_average}
          </p>
        </Card>
      ))
      }
    </div>
  )
}

export default MovieCard;