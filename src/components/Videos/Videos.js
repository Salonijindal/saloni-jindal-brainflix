import React from "react";
import Video from "../Video/Video";
import "./Videos.scss";
const Videos = (props) => {
  console.log(props);
  return (
    <>
      {props.videos.map((video) => {
        return (
          <Video
            title={video.title}
            image={video.image}
            channel={video.channel}
          />
        );
      })}
    </>
  );
};

export default Videos;
