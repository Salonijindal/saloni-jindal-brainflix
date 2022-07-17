import React, { Component } from "react";
import Videos from "../../components/Videos/Videos";
import HeroVideo from "../../components/HeroVideo/HeroVideo";
import CommentSection from "../../components/CommentSection/CommentSection";
import MainVideo from "../../components/MainVideo/MainVideo";
import axios from "axios";
import { NavLink } from "react-router-dom";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

class MainPage extends Component {
  state = {
    videos: [],
    currentVideo: null,
    isError: false,
  };
  componentDidMount() {
    //Gettin Current Video Id from URl
    const currentVideoId = this.props.match.params.id;

    axios
      .get(`${SERVER_URL}/videos`)
      .then((response) => {
        console.log(response);
        const videos = response.data;
        const firstVideoId = response.data[0].id;

        this.setState({
          videos: videos,
        });

        return currentVideoId ? currentVideoId : firstVideoId;
      })
      .then((videoId) => {
        return axios.get(`${SERVER_URL}/videos/${videoId}`);
      })
      .then((videoDetails) => {
        this.setState({
          currentVideo: videoDetails.data,
        });
      })
      .catch((err) => {
        this.setState({ isError: true });
      });
  }
  componentDidUpdate(prevVal) {
    const prevVideoId = prevVal.match.params.id;
    const currentVideoId = this.props.match.params.id;

    const videoIdToFetch = currentVideoId
      ? currentVideoId
      : this.state.videos[0].id;
    if (prevVideoId !== currentVideoId) {
      axios
        .get(`${SERVER_URL}/videos/${videoIdToFetch}`)
        .then((videoDetails) => {
          this.setState({
            currentVideo: videoDetails.data,
          });
        })
        .catch((err) => {
          this.setState({ isError: true });
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
