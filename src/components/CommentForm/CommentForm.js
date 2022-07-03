import React from "react";
import avatar from "../../assets/images/mohan-muruge.jpg";
import addComment from "../../assets/icons/add_comment.svg";

const CommentForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };
  return (
    <div className="comment-section__container">
      <img className="comment-section__avatar" src={avatar} alt="User Avatar" />
      <form
        id="comment-section__form"
        className="comment-section__form"
        onSubmit={handleSubmit}
      >
        <div className="comment-section__input">
          <label htmlFor="comment">Join the conversation</label>
          <textarea
            className="comment-section__textarea"
            id="comment"
            type="text"
            row="1"
            name="comment"
            placeholder="Add a new comment"
          ></textarea>
        </div>
        <div className="comment-section__button comment-section__button--wrapper">
          <img
            className="comment-section__comment"
            src={addComment}
            alt="Add Comment Icon"
          />
          <input
            type="button"
            id="comment"
            className="comment-section__comment-input"
            name="comment"
            value="Comment"
          />
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
