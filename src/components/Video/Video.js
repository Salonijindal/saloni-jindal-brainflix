import React from "react";
import "./Video.scss";

const Video = ({ id, title, image, channel, onClick }) => {
  const handleVideoSelected = (e) => {
    e.preventDefault();
    onClick(id);
  };
  return (
    <li className="video-section__card">
      <a
        href={`/video/${title}`}
        onClick={handleVideoSelected}
        className="video-section__link"
      >
        <div>
          <img
            src={image}
            className="video-section__image"
            alt={`${title}`}
          ></img>
        </div>
        <div className="video-section__description">
          <h3 className="video-section__title">{title}</h3>
          <p className="video-section__content">{channel}</p>
        </div>
      </a>
    </li>
  );
};

export default Video;
