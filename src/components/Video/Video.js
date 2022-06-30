import React from "react";
import "./Video.scss";

const Video = ({ title, image, channel }) => {
  console.log(title, image, channel);
  return (
    <li className="video-card">
      <img src={image} className="video-card__image"></img>
      <div>
        <h3 className="video-card__title">{title}</h3>
        <p className="video-card__content">{channel}</p>
      </div>
    </li>
  );
};

export default Video;
