import React from "react";
import "./HeroVideo.scss";

const HeroVideo = (props) => {
  return (
    <>
      <div className="hero-section">
        <div className="hero-section__description">
          <h1>{props.selectedVideo.title}</h1>
          <div className="hero-section__container">
            <div className="hero-section__info">
              <h3>By {props.selectedVideo.channel}</h3>
              <h2>07/11/2021</h2>
            </div>
            <div className="hero-section__info">
              <h2>{props.selectedVideo.views}</h2>
              <h2>{props.selectedVideo.likes}</h2>
            </div>
          </div>
          <hr></hr>
          <p className="hero-section__description-container">
            {props.selectedVideo.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroVideo;
