import React from "react";

const Video = ({ title, image, channel }) => {
  console.log(title, image, channel);
  return (
    <>
      <div>
        <img src={image}></img>
        <div>
          <h1>{title}</h1>
          <p>{channel}</p>
        </div>
      </div>
    </>
  );
};

export default Video;
