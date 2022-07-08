import React, { Component } from "react";
import Videos from "../components/Videos/Videos";
import HeroVideo from "../components/HeroVideo/HeroVideo";
import CommentSection from "../components/CommentSection/CommentSection";
import MainVideo from "../components/MainVideo/MainVideo";
import axios from "axios";
import { API_KEY, API_URl } from "../utils/utils";

class MainPage extends Component {
  state = {
    videos: [],
    currentVideo: null,
  };
  componentDidMount() {
    //Gettin Current Video Id from URl
    const currentVideoId = this.props.match.params.id;
    console.log("Vidoe ID from URL", this.props.match.params.id);

    axios
      .get(`${API_URl}?api_key=${API_KEY}`)
      .then((response) => {
        const videos = response.data;
        const firstVideo = response.data[0];

        this.setState({
          videos: videos,
        });
        return currentVideoId ? currentVideoId : firstVideo;
      })
      .then((videoId) => {
        return axios.get(`${API_URl}/${videoId}?api_key=${API_KEY}`);
      })
      .then((videoDetails) => {
        console.log("Video details:-----", videoDetails);
        this.setState({
          currentVideo: videoDetails,
        });
      })
      .catch((err) => {
        console.log("Error in retrieving video data from url");
      });
  }

  // handleClick = (videoId) => {
  //   const selectedVideo = videoDetialsData.find(
  //     (video) => video.id === videoId
  //   );
  //   this.setState({
  //     currentVideo: selectedVideo,
  //   });
  // };

  render() {
    // const filteredVideos = this.state.videos.filter(
    //   (video) => video.id !== this.state.currentVideo.id
    // );
    if (!this.state.currentVideo) {
      return <h1>Video loading....</h1>;
    }

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
          <Videos videos={this.state.videos} />
        </main>
      </>
    );
  }
}

export default MainPage;
