import React from "react";
import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";
import "./CommentSection.scss";

const CommentSection = ({ comment }) => {
  const commentLength = comment.length;
  return (
    <section className="comment-section">
      <h3>{commentLength} Comments</h3>
      <div className="comment-section__panel">
        <CommentForm />
        <CommentList commentList={comment} />
      </div>
    </section>
  );
};

export default CommentSection;
