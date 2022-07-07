import React from "react";
import Header from "./components/Header/Header";
import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import videoData from "./data/videos.json";
import videoDetialsData from "./data/video-details.json";
import Videos from "./components/Videos/Videos";
import HeroVideo from "./components/HeroVideo/HeroVideo";
import CommentSection from "./components/CommentSection/CommentSection";
import MainVideo from "./components/MainVideo/MainVideo";

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
    return (
      <>
        <BrowserRouter>
          <Header />
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
        </BrowserRouter>
      </>
    );
  }
}

export default App;
