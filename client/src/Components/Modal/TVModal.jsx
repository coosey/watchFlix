import React, { useState, useRef, useEffect } from "react";
import "./Modal.scss";
import axios from "axios";

const TVModal = ({ modalVisible, hide, credits, details, setTvDetails, setTvCredits }) => {
  const showHideClassName = modalVisible ? "modal display-block" : "modal display-none";
  const [showMore, setShowMore] = useState(false);

  const tvLength = (array) => {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
      total += array[i];
    }
    let average = total / array.length;
    return Math.round(average);
  }

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          hide();
          setTvDetails({
            name: "",
            overview: "",
            episode_run_time: [],
            first_air_date: "",
            last_air_date: "",
            number_of_seasons: 0,
            number_of_episodes: 0
          });
          setTvCredits([]);
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
        <h1>{details.name}</h1>
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
          <p>Release Date: {details.first_air_date}</p>
          <p>Last Air Date: {details.last_air_date}</p>
          <p>Average Length: {tvLength(details.episode_run_time)} minutes</p>
          <p>Seasons: {details.number_of_seasons}</p>
          <p>Episodes: {details.number_of_episodes}</p>
        </div>
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