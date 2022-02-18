import React from "react";
import { Card } from "antd";
import "./Styles/TvCard.scss";
import genres from "./tvGenres.js";

const TvCard = ({tv}) => {
  const { Meta } = Card;
  return (
    <div className="tv-container">
      { tv.slice(0, 10).map(tv => (
        <Card
          className="tv-card"
          key={tv.id}
          // bordered={true}
          style={{ width: 262, height: 420 }}
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
    </div>
  )
}

export default TvCard;