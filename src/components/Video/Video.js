import React from "react";
import "./Video.scss";

const Video = ({ title, image, channel }) => {
  console.log(title, image, channel);
  return (
    <li className="video-section__card">
      <div>
        <img src={image} className="video-section__image"></img>
      </div>
      <div className="video-section__description">
        <h3 className="video-section__title">{title}</h3>
        <p className="video-section__content">{channel}</p>
      </div>
    </li>
  );
};

export default Video;
