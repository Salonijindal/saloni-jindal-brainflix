import React from "react";
import Header from "./components/Header/Header";
import "./App.scss";
import videoData from "./data/videos.json";
import videoDetialsData from "./data/video-details.json";
import Videos from "./components/Videos/Videos";
import HeroVideo from "./components/HeroVideo/HeroVideo";

class App extends React.Component {
  state = {
    videos: videoData,
  };
  render() {
    return (
      <>
        <Header />
        <HeroVideo />
        <Videos videos={this.state.videos} />
      </>
    );
  }
}

export default App;
