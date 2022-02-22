import React, { useEffect, useState } from "react";
import "./MovieModal.scss";
import axios from "axios";

const MovieModal = ({ modalVisible, hideModal, movieCast, movieTitle }) => {
  const showHideClassName = modalVisible ? "modal display-block" : "modal display-none";

  console.log("MOVIE CAST: ", movieCast)

  return (
    <div
      className={showHideClassName}
      onClick={hideModal}
    >
      <section className="modal-main">
        <h3>{movieTitle}</h3>
      </section>
    </div>
  )
}

export default MovieModal;