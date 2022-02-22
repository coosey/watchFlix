import React, { useEffect, useState } from "react";
import "./MovieModal.scss";
import axios from "axios";

const MovieModal = ({ modalVisible, hideModal, credits, details, setMovieDetails }) => {
  const showHideClassName = modalVisible ? "modal display-block" : "modal display-none";

  // console.log("MOVIE CREDITS: ", credits) // cast and crew
  // console.log("MOVIE DETAILS: ", details)

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
        {credits.map((cast) => (
          <div key={cast.cast_id}>
            <div
              className="movie-cast"
              key={cast.cast_id}
            >
              <img
                style={{ width: 50, height: 50, borderRadius: "50%"}}
                src={
                  cast.profile_path ? `https://image.tmdb.org/t/p/original${cast.profile_path}` :
                  "https://icon-library.com/images/no-profile-pic-icon/no-profile-pic-icon-11.jpg"
                }
              />
              <div>{cast.name} - "{cast.character}"</div>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default MovieModal;