import React from "react";
import Avatar from "../../assets/images/mohan-muruge.jpg";
import "./CommentSection.scss";

const CommentSection = () => {
  return (
    <section class="comment-section">
      <h3>3 Comments</h3>
      <div class="comment-section__panel">
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
        <div class="comment-section__list">
          <div
            id="223d9fb5-d42f-491c-bfe3-e7f9c8887f22"
            class="comment-section__item"
          >
            <div>
              <img class="comment-section__image"></img>
            </div>
            <article class="comment-section__section">
              <div class="comment-section__detail">
                <p class="comment-section__name">Emilie Beach</p>
                <p class="comment-section__date">9/1/2021</p>
              </div>
              <p class="comment-section__text">
                I feel blessed to have seen them in person. What a show! They
                were just perfection. If there was one day of my life I could
                relive, this would be it. What an incredible day.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommentSection;
