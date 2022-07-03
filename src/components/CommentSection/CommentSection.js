import React from "react";
import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";
import "./CommentSection.scss";

const CommentSection = (props) => {
  const commentLength = props.comment.length;
  return (
    <section className="comment-section">
      <h3>{commentLength} Comments</h3>
      <div className="comment-section__panel">
        <CommentForm />
        <CommentList commentList={props} />
      </div>
    </section>
  );
};

export default CommentSection;
