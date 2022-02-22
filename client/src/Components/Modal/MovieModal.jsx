import React, { useEffect, useRef, useState } from "react";
import "./MovieModal.scss";

const MovieModal = ({ modalVisible, hideModal }) => {
  const showHideClassName = modalVisible ? "modal display-block" : "modal display-none";

  return (
    <div
      className={showHideClassName}
      onClick={hideModal}
    >
      <section className="modal-main">
        alskjfdkl; asljdflkasjlf ;alskdj
      </section>
    </div>
  )
}

export default MovieModal;