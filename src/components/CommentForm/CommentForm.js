import React from "react";
import Avatar from "../../assets/images/mohan-muruge.jpg";

const CommentForm = () => {
  return (
    <div class="comment-section__container">
      <img class="comment-section__avatar" src={Avatar} alt="User Avatar" />
      <form id="comment-section__form" class="comment-section__form">
        <div className="comment-section__input">
          <label for="comment">Join the conversation</label>
          <textarea
            class="comment-section__textarea"
            id="comment"
            rows="5"
            type="text"
            name="comment"
            value=""
            placeholder="Add a new comment"
          ></textarea>
        </div>
        <button>Comment</button>
      </form>
    </div>
  );
};

export default CommentForm;
