import React from "react";
import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";
import "./CommentSection.scss";

const CommentSection = (props) => {
  console.log(props);
  return (
    <section class="comment-section">
      <h3>3 Comments</h3>
      <div class="comment-section__panel">
        <CommentForm />
        <CommentList commentList={props} />
      </div>
    </section>
  );
};

export default CommentSection;
