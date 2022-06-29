import React from "react";
import Video from "../Video/Video";
const Videos = (props) => {
  console.log(props);
  return (
    <ul>
      {props.videos.map((video) => {
        return (
          <Video
            title={video.title}
            image={video.image}
            channel={video.channel}
          />
        );
      })}
    </ul>
  );
};

export default Videos;
