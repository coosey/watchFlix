import React, { useState } from "react";
import "./Modal.scss";
import axios from "axios";

const TVModal = ({ modalVisible, hideModal, credits, details, setTvDetails }) => {
  const showHideClassName = modalVisible ? "modal display-block" : "modal display-none";

  return (
    <div
      className={showHideClassName}
      onClick={() => {
        hideModal();
        setTvDetails({ name: "", overview: "", episode_run_time: [], first_air_date: "", last_air_date: "", number_of_seasons: 0, number_of_episodes: 0 });
      }}
    >
      <section className="modal-main">
        <h1>{details.name}</h1>
        <div className="overview">{details.overview}</div>
        {credits.map((cast) => (
          <div
            className="cast"
            key={cast.id}
          >
            <img
              src={
                cast.profile_path ? `https://image.tmdb.org/t/p/original${cast.profile_path}` :
                "https://icon-library.com/images/no-profile-pic-icon/no-profile-pic-icon-11.jpg"
              }
              alt={`${cast.name}`}
            />
            <div>{cast.name} - "{cast.character}"</div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default TVModal;