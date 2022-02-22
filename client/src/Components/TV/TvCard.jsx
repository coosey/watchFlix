import React, { useState, useEffect } from "react";
import { Card, Modal } from "antd";
import "./Styles/TvCard.scss";
import genres from "./tvGenres.js";
import TVModal from "../Modal/TVModal.jsx";
import axios from "axios";

const TvCard = ({tv}) => {
  const [tvCredits, setTvCredits] = useState([]);
  const [tvDetails, setTvDetails] = useState({ name: "", overview: "", episode_run_time: [], first_air_date: "", last_air_date: "", number_of_seasons: 0, number_of_episodes: 0 });
  const [modalVisible, setModalVisible] = useState(false);
  const { Meta } = Card;
  // name, character, profile_path
  const getTVCredits = (id) => {
    axios.get(`/tv/credits/${id}`)
      .then((response) => {
        setTvCredits(response.data.cast);
      })
      .catch((err) => console.error(err));
  };

  const getTVDetails = (id) => {
    axios.get(`/tv/details/${id}`)
      .then((response) => {
        let data = response.data;
        setTvDetails({
          name: data.name,
          overview: data.overview,
          episode_run_time: data.episode_run_time,
          first_air_date: data.first_air_date,
          last_air_date: data.last_air_date,
          number_of_seasons: data.number_of_seasons,
          number_of_episodes: data.number_of_episodes
        })
      })
      .catch((err) => console.error(err));
  };

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  return (
    <div className="tv-container">
      { tv.slice(0, 10).map(tv => (
        <Card
          className="tv-card"
          key={tv.id}
          onClick={() => {
            showModal();
            getTVCredits(tv.id);
            getTVDetails(tv.id);
          }}
          bordered={true}
          cover={
            <img
              style={{ width: 262, height: 300 }}
              src={`https://image.tmdb.org/t/p/original${tv.poster_path}`}
            />
          }
        >
          <Meta title={tv.name} />
          {tv.genre_ids.map(id => (
            <span key={id}>
              {genres[id]}
            </span>
          ))}
          <p
            className="tv-avg"
            style={{
              color: (tv.vote_average >= 8) ? "green" : (tv.vote_average < 8 && tv.vote_average >= 6) ? "darkOrange" : "red"
            }}
          >
            {tv.vote_average}
          </p>
        </Card>
      ))}
      <TVModal
        modalVisible={modalVisible}
        hideModal={hideModal}
        credits={tvCredits}
        details={tvDetails}
        setTvDetails={setTvDetails}
      />
    </div>
  )
}

export default TvCard;