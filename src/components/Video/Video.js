import React from "react";
import "./Video.scss";
import { NavLink } from "react-router-dom";
const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const Video = ({ id, title, image, channel }) => {
  return (
    <li className="video-section__card">
      <NavLink to={`/videos/${id}`} className="video-section__link">
        <div>
          <img
            src={`${SERVER_URL}/${image}`}
            className="video-section__image"
            alt={`${title}`}
          ></img>
        </div>
        <div className="video-section__description">
          <h3 className="video-section__title">{title}</h3>
          <p className="video-section__content">{channel}</p>
        </div>
      </NavLink>
    </li>
  );
};

export default Video;
