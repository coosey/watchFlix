import React, { useEffect, useState } from "react";
import "./MovieModal.scss";
import axios from "axios";

const MovieModal = ({ modalVisible, hideModal, credits, details, setMovieDetails }) => {
  const showHideClassName = modalVisible ? "modal display-block" : "modal display-none";

  console.log("MOVIE CREDITS: ", credits) // cast and crew
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
        {Object.keys(credits).map((cast, i) => (
          <div key={i}>
            {credits.cast.map((cast) => (
              <ul key={cast.cast_id}>
                <li key={cast.cast_id}>{cast.name} - "{cast.character}"</li>
              </ul>
            ))}
          </div>
        ))}
      </section>
    </div>
  )
}

export default MovieModal;