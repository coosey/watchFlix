import React, { useState } from "react";
import "./Modal.scss";
import axios from "axios";

const MovieModal = ({ modalVisible, hideModal, credits, details, setMovieDetails }) => {
  const showHideClassName = modalVisible ? "modal display-block" : "modal display-none";

  return (
    <div
      className={showHideClassName}
      onClick={() => {
        hideModal();
        setMovieDetails({ title: "", overview: "", date: "", time: 0 });
      }}
    >
      <section className="modal-main">
        <h1>{details.title}</h1>
        <div className="overview">{details.overview}</div>
        <div className="details">
          <p>Release Date: {details.date}</p>
          <p>Length: {details.time} minutes</p>
          <p>Cast:</p>
        </div>
        {credits.map((cast) => (
          <div
            className="cast"
            key={cast.cast_id}
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

export default MovieModal;