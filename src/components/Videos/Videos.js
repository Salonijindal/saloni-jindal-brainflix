import React from "react";
import Video from "../Video/Video";
import "./Videos.scss";
const Videos = ({ videos }) => {
  return (
    <div className="video-section">
      <h2>Next Videos</h2>
      <ul>
        {videos.map((video) => {
          return (
            <Video
              key={video.id}
              id={video.id}
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
