import React, { Component } from "react";
import Videos from "../../components/Videos/Videos";
import HeroVideo from "../../components/HeroVideo/HeroVideo";
import CommentSection from "../../components/CommentSection/CommentSection";
import MainVideo from "../../components/MainVideo/MainVideo";
import axios from "axios";
import { API_KEY, API_URl } from "../../utils/utils";
import { NavLink } from "react-router-dom";

class MainPage extends Component {
  state = {
    videos: [],
    currentVideo: null,
    isError: false,
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
        this.setState({ isError: true });
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
    const filteredVideos = this.state.currentVideo
      ? this.state.videos.filter(
          (video) => video.id !== this.state.currentVideo.id
        )
      : [];

    return (
      <>
        {this.state.currentVideo ? (
          <>
            <MainVideo currentVideo={this.state.currentVideo.image} />
            <main className="main-section__container main-section__container--wrapper">
              <section className="main-section__panel">
                <HeroVideo
                  title={this.state.currentVideo.title}
                  channel={this.state.currentVideo.channel}
                  date={this.state.currentVideo.timestamp}
                  views={this.state.currentVideo.views}
                  likes={this.state.currentVideo.likes}
                  description={this.state.currentVideo.description}
                />
                <CommentSection
                  comment={this.state.currentVideo.comments}
                  id={this.state.currentVideo.id}
                />
              </section>
              <Videos videos={filteredVideos} />
            </main>
          </>
        ) : this.state.isError ? (
          <div className="main-section__error-page">
            <h1>Error...</h1>
            <NavLink to="/" className="main-section__button">
              <input
                type="button"
                id="error"
                className="main-section__error-input"
                name="error"
                value="Go Back"
              />
            </NavLink>
          </div>
        ) : (
          <h1 className="main-section__error-page">
            Videos Loading, please wait for a while...
          </h1>
        )}
      </>
    );
  }
}

export default MainPage;
