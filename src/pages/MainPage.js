import React, { Component } from "react";
import videoData from "../data/videos.json";
import videoDetialsData from "../data/video-details.json";
import Videos from "../components/Videos/Videos";
import HeroVideo from "../components/HeroVideo/HeroVideo";
import CommentSection from "../components/CommentSection/CommentSection";
import MainVideo from "../components/MainVideo/MainVideo";
console.log(videoData);
console.log(videoDetialsData);

class MainPage extends Component {
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
    return (
      <>
        <MainVideo currentVideo={this.state.currentVideo.image} />
        <main className="main-section__container main-section__container--wrapper">
          <section className="main-section__panel">
            <HeroVideo selectedVideo={this.state.currentVideo} />
            <CommentSection
              comment={this.state.currentVideo.comments}
              id={this.state.currentVideo.id}
            />
          </section>
          <Videos videos={filteredVideos} onClick={this.handleClick} />
        </main>
      </>
    );
  }
}

export default MainPage;
