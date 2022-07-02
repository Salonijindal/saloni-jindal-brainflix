import React from "react";

const CommentItem = (props) => {
  return (
    <li id="223d9fb5-d42f-491c-bfe3-e7f9c8887f22" class="comment-section__item">
      <div>
        <img class="comment-section__image"></img>
      </div>
      <article class="comment-section__section">
        <div class="comment-section__detail">
          <p class="comment-section__name">{props.name}</p>
          <p class="comment-section__date">{props.timestamp}</p>
        </div>
        <p class="comment-section__text">{props.comment}</p>
      </article>
    </li>
  );
};

export default CommentItem;
