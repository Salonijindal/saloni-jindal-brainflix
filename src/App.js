import React from "react";
import Header from "./components/Header/Header";
import "./App.scss";
import videoData from "./data/videos.json";
import videoDetialsData from "./data/video-details.json";
import Videos from "./components/Videos/Videos";
import HeroVideo from "./components/HeroVideo/HeroVideo";
import CommentSection from "./components/CommentSection/CommentSection";

class App extends React.Component {
  state = {
    videos: videoData,
    currentVideo: videoDetialsData[0],
  };
  handleClick = (videoId) => {
    const selectedVideo = videoDetialsData.find(
      (video) => video.id === videoId
    );
    this.setState({
      currentVideo: selectedVideo,
    });
  };
  render() {
    const filteredVideos = this.state.videos.filter(
      (video) => video.id !== this.state.currentVideo.id
    );
    console.log(this.state.currentVideo);
    return (
      <>
        <Header />
        <HeroVideo selectedVideo={this.state.currentVideo} />
        <CommentSection
          comment={this.state.currentVideo.comments}
          id={this.state.currentVideo.id}
        />
        <Videos videos={filteredVideos} onClick={this.handleClick} />
      </>
    );
  }
}

export default App;
