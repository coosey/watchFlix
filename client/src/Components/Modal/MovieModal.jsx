import React, { useState, useRef, useEffect } from "react";
import "./Modal.scss";
import axios from "axios";

const MovieModal = ({ modalVisible, hide, credits, details, setMovieDetails, setMovieCredits }) => {
  const showHideClassName = modalVisible ? "modal display-block" : "modal display-none";
  const [showMore, setShowMore] = useState(false);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          hide();
          setMovieDetails({
            title: "",
            overview: "",
            date: "",
            time: 0
          });
          setMovieCredits([]);
          setShowMore(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      }
    }, [ref]);
  };

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <div className={showHideClassName}>
      <section className="modal-main" ref={wrapperRef}>
        <h1>{details.title}</h1>
        <div className="overview">
          {showMore ? details.overview : `${details.overview.substring(0, 160)}`}
          {details.overview.length >= 160 ?
            <span
              onClick={(e) => {
                e.preventDefault();
                setShowMore(!showMore)
              }}
            >
              {showMore ? "Collapse" : "... Expand"}
            </span> : null
          }
        </div>
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