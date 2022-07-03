import React from "react";

const MainVideo = (props) => {
  console.log(props);
  return (
    <video
      className="hero-section__video"
      poster={props.currentVideo}
      controls
    ></video>
  );
};

export default MainVideo;
