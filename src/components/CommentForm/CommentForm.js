import React from "react";
import Avatar from "../../assets/images/mohan-muruge.jpg";

const CommentForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };
  return (
    <div className="comment-section__container">
      <img className="comment-section__avatar" src={Avatar} alt="User Avatar" />
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
            rows="5"
            type="text"
            name="comment"
            placeholder="Add a new comment"
          ></textarea>
        </div>
        <button>Comment</button>
      </form>
    </div>
  );
};

export default CommentForm;
