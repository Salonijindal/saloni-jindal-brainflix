import React from "react";

const CommentItem = (props) => {
  function getDate(timestamp) {
    let date = new Date(timestamp);
    let fulldate =
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    return fulldate;
  }
  return (
    <li className="comment-section__item">
      <div>
        <img className="comment-section__image"></img>
      </div>
      <article className="comment-section__section">
        <div className="comment-section__detail">
          <p className="comment-section__name">{props.name}</p>
          <p className="comment-section__date">{getDate(props.date)}</p>
        </div>
        <p className="comment-section__text">{props.comment}</p>
      </article>
    </li>
  );
};

export default CommentItem;
