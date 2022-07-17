import React, { Component } from "react";
import publishIcon from "../../assets/icons/publish.svg";
import ImageThumbnail from "../../assets/images/Upload-video-preview.jpg";
import { withRouter } from "react-router";
import axios from "axios";
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

class UploadForm extends Component {
  state = {
    title: "",
    description: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.title || !this.state.description) {
      return alert("Please enter Title and Description");
    }

    axios
      .post(`${SERVER_URL}/videos`, this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    alert("Your video has been submitted!");
    this.props.history.push("/");
  };

  handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    this.setState({
      [name]: e.target.value,
    });
  };

  componentDidMount() {}

  render() {
    return (
      <form
        id="upload-section__form "
        className="upload-section__form"
        onSubmit={this.handleSubmit}
      >
        <div className="upload-section__panel">
          <div className="upload-section__image">
            <label htmlFor="upload">Video Thumbnail</label>
            <img
              className="upload-section__thumbnail"
              src={ImageThumbnail}
              alt="Upload Video Thumbnail"
            ></img>
          </div>
          <div className="upload-section__input-container">
            <div className="upload-section__input">
              <label htmlFor="upload" name="title">
                Title your video
              </label>
              <input
                className="upload-section__input-area"
                type="text"
                onChange={this.handleChange}
                name="title"
                value={this.state.title}
                placeholder="Add a title to your video"
              ></input>
            </div>
            <div className="upload-section__input">
              <label htmlFor="upload" name="description">
                Add a video description
              </label>
              <textarea
                className="upload-section__textarea"
                type="text"
                onChange={this.handleChange}
                value={this.state.description}
                row="1"
                name="description"
                placeholder="Add a description to your video"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="upload-section__button-container">
          <div
            to="/"
            className="upload-section__button upload-section__button--wrapper"
          >
            <img
              className="upload-section__publish"
              src={publishIcon}
              alt="Publish Icon"
            />
            <input
              type="submit"
              id="upload"
              className="upload-section__upload-input"
              name="upload"
              value="publish"
            />
          </div>
          <div className="upload-section__button">
            <input
              type="button"
              id="cancel"
              className="upload-section__upload-input"
              name="cancel"
              value="cancel"
              onClick={() => this.props.history.push("/")}
            />
          </div>
        </div>
      </form>
    );
  }
}

export default withRouter(UploadForm);
