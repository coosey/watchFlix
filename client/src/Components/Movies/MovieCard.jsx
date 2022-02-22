import React, { useState, useEffect } from "react";
import { Card } from "antd";
import "./Styles/MovieCard.scss";
import genres from "./movieGenres.js";
import MovieModal from "../Modal/MovieModal.jsx";
import axios from "axios";

const MovieCard = ({movies}) => {
  const [movieCast, setMovieCast] = useState([]);
  const [movieTitle, setMovieTitle] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const { Meta } = Card;

  const getMovieCast = (id) => {
    axios.get(`/movies/${id}`)
      .then((response) => {
        setMovieCast(response.data);
      })
  }

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  return (
    <div className="movie-container">
      { movies.slice(0, 10).map(movie => (
        <Card
          className="movie-card"
          onClick={() => {
            showModal();
            getMovieCast(movie.id);
            setMovieTitle(movie.title);
          }}
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
      <MovieModal
        modalVisible={modalVisible}
        hideModal={hideModal}
        movieCast={movieCast}
        movieTitle={movieTitle}
      />
    </div>
  )
}

export default MovieCard;