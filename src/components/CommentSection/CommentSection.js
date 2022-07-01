import React from "react";

const CommentSection = () => {
  return (
    <section class="comment-section">
      <h2>Join the Conservation</h2>
      <div class="comment-section__panel">
        <div class="comment-section__container">
          <img
            class="comment-section__avatar"
            src="./assets/Images/Mohan-muruge.jpg"
            alt="User Avatar"
          />
          <form id="comment-section__form" class="comment-section__form">
            <label for="name">Name</label>
            <input
              class="comment-section__input"
              type="text"
              id="name"
              name="name"
              value=""
              placeholder="Enter your name"
            />
            <label for="comment">Comment</label>
            <textarea
              class="comment-section__textarea"
              id="comment"
              rows="5"
              type="text"
              name="comment"
              value=""
              placeholder="Add a new comment"
            ></textarea>
            <button>submit</button>
          </form>
        </div>
        <div class="comment-section__list"></div>
      </div>
    </section>
  );
};

export default CommentSection;
