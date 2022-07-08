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
      .get(`${API_URl}/videos?api_key=${API_KEY}`)
      .then((response) => {
        const videos = response.data;
        const firstVideoId = response.data[0].id;

        this.setState({
          videos: videos,
        });

        return currentVideoId ? currentVideoId : firstVideoId;
      })
      .then((videoId) => {
        return axios.get(`${API_URl}/videos/${videoId}?api_key=${API_KEY}`);
      })
      .then((videoDetails) => {
        this.setState({
          currentVideo: videoDetails.data,
        });
      })
      .catch((err) => {
        console.log("Error in retrieving video data from url");
      });
  }
  componentDidUpdate(prevVal) {
    const prevVideoId = prevVal.match.params.id;
    console.log(this.props.match);
    const currentVideoId = this.props.match.params.id;

    const videoIdToFetch = currentVideoId
      ? currentVideoId
      : this.state.videos[0].id;
    console.log("Vidoe ID from Home Page", videoIdToFetch);
    if (prevVideoId !== currentVideoId) {
      axios
        .get(`${API_URl}/videos/${videoIdToFetch}?api_key=${API_KEY}`)
        .then((videoDetails) => {
          console.log("Video details:-----", videoDetails.data);
          this.setState({
            currentVideo: videoDetails.data,
          });
          console.log(this.state.currentVideo.videoDetails.data);
        })
        .catch((err) => {
          console.log(
            "Compount did update in Error in retrieving video data from url"
          );
        });
    }
  }

  render() {
    if (!this.state.currentVideo) {
      return <h1>Video loading....</h1>;
    }

    const filteredVideos = this.state.videos.filter(
      (video) => video.id !== this.state.currentVideo.id
    );
    console.log(filteredVideos);

    return (
      <>
        {this.state.currentVideo ? (
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
              <Videos videos={filteredVideos} />
            </main>
          </>
        ) : (
          <h1>Videos Loading...</h1>
        )}
      </>
    );
  }
}

export default MainPage;
