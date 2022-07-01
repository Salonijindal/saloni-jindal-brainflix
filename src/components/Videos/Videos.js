import React from "react";
import Video from "../Video/Video";
import "./Videos.scss";
const Videos = (props) => {
  console.log(props);
  return (
    <div className="video-section">
      <h2>Next Videos</h2>
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
    </div>
  );
};

export default Videos;
