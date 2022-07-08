import React from "react";
import "./HeroVideo.scss";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";

const HeroVideo = ({ title, channel, date, views, likes, description }) => {
  const getDate = (timestamp) => {
    let date = new Date(timestamp);
    let fulldate =
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    return fulldate;
  };
  return (
    <>
      <div className="hero-section">
        <div className="hero-section__description">
          <h1>{title}</h1>
          <div className="hero-section__container">
            <div className="hero-section__info">
              <h3>By {channel}</h3>
              <h2>{getDate(date)}</h2>
            </div>
            <div className="hero-section__info">
              <div className="hero-section__views">
                <img src={viewsIcon} alt="Views Icon"></img>
                <h2 className="hero-section__views">{views}</h2>
              </div>
              <div className="hero-section__likes">
                <img src={likesIcon} alt="Views Icon"></img>
                <h2>{likes}</h2>
              </div>
            </div>
          </div>
          <hr></hr>
          <p className="hero-section__description-container">{description}</p>
        </div>
      </div>
    </>
  );
};

export default HeroVideo;
