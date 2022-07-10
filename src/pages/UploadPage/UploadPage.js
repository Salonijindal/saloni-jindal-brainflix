import React from "react";
import UploadForm from "../../components/UploadForm/UploadForm";
import "./UploadPage.scss";

const UploadPage = () => {
  return (
    <>
      <hr />
      <section className="upload-section upload-section--wrapper">
        <h1 className="upload-section__heading">Upload Video</h1>
        <UploadForm />
      </section>
    </>
  );
};

export default UploadPage;
