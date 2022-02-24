import React, { useState, useEffect } from "react";
import { Card } from "antd";
import genres from "./movieGenres.js";
import MovieModal from "../Modal/MovieModal.jsx";
import axios from "axios";
import "./Styles/MovieCard.scss";

const MovieCard = ({movies}) => {
  const [movieCredits, setMovieCredits] = useState([]);
  const [movieDetails, setMovieDetails] = useState({ title: "", overview: "", date: "", time: 0 });
  const [modalVisible, setModalVisible] = useState(false);
  const { Meta } = Card;

  const getMovieCredits = (id) => {
    axios.get(`/movies/credits/${id}`)
      .then((response) => {
        setMovieCredits(response.data.cast);
      })
      .catch((err) => console.error(err));
  }

  const getMovieDetails = (id) => {
    axios.get(`/movies/details/${id}`)
      .then((response) => {
        let data = response.data;
        setMovieDetails({
          title: data.original_title,
          overview: data.overview,
          date: data.release_date,
          time: data.runtime
        });
      })
      .catch((err) => console.error(err));
  }

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  return (
    <div className="movie-container">
      { movies.slice(0, 10).map(movie => (
        <Card
          className="movie-card"
          key={movie.id}
          onClick={() => {
            showModal();
            getMovieCredits(movie.id);
            getMovieDetails(movie.id);
          }}
          bordered={true}
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
        hide={hideModal}
        credits={movieCredits}
        details={movieDetails}
        setMovieDetails={setMovieDetails}
        setMovieCredits={setMovieCredits}
      />
    </div>
  )
}

export default MovieCard;