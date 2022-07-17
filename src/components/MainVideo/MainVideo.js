import React from "react";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const MainVideo = (props) => {
  console.log("props", props);
  return (
    <video
      className="hero-section__video"
      poster={`${SERVER_URL}/${props.currentVideo}`}
      controls
    ></video>
  );
};

export default MainVideo;
