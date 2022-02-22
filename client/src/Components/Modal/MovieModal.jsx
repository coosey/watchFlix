import React, { useEffect, useState } from "react";
import "./MovieModal.scss";
import axios from "axios";

const MovieModal = ({ modalVisible, hideModal, credits, details, setMovieDetails }) => {
  const showHideClassName = modalVisible ? "modal display-block" : "modal display-none";

  // console.log("MOVIE CREDITS: ", credits) // cast and crew
  console.log("MOVIE DETAILS: ", details)

  return (
    <div
      className={showHideClassName}
      onClick={() => {
        hideModal();
        setMovieDetails({ title: "", overview: "", date: "", time: 0 });
      }}
    >
      <section className="modal-main">
        <h2>{details.title}</h2>
        <div>{details.overview}</div>
      </section>
    </div>
  )
}

export default MovieModal;