import React from "react";
import { useHistory } from "react-router-dom";
import publishIcon from "../../assets/icons/publish.svg";
import ImageThumbnail from "../../assets/images/Upload-video-preview.jpg";

const UploadForm = () => {
  let history = useHistory();
  const handleSubmit = (e) => {
    alert("Your video has been submitted!");
    history.push("/");
  };
  return (
    <form
      id="upload-section__form "
      className="upload-section__form"
      onSubmit={handleSubmit}
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
            <label htmlFor="upload">Title your video</label>
            <input
              className="upload-section__input-area"
              type="text"
              name="upload"
              placeholder="Add a title to your video"
            ></input>
          </div>
          <div className="upload-section__input">
            <label htmlFor="upload">Add a video description</label>
            <textarea
              className="upload-section__textarea"
              id="upload"
              type="text"
              row="1"
              name="upload"
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
          />
        </div>
      </div>
    </form>
  );
};

export default UploadForm;
