import React from "react";
import "./HeroVideo.scss";

const HeroVideo = (props) => {
  return (
    <div className="hero-section">
      <video
        className="hero-section__video"
        poster={props.selectedVideo.image}
        controls
      ></video>
      <div className="hero-section__description">
        <h1>{props.selectedVideo.title}</h1>
        <hr></hr>
        <div>
          <div className="hero-section__info">
            <h3>By {props.selectedVideo.channel}</h3>
            <h2>{props.selectedVideo.views}</h2>
          </div>
          <div className="hero-section__info">
            <h2>07/11/2021</h2>
            <h2>{props.selectedVideo.likes}</h2>
          </div>
          <hr></hr>
          <p>{props.selectedVideo.description}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroVideo;
