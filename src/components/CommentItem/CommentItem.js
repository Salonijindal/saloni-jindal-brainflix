import React from "react";

const CommentItem = ({ id, name, comment, date }) => {
  const getDate = (timestamp) => {
    let date = new Date(timestamp);
    let fulldate =
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    return fulldate;
  };
  return (
    <li className="comment-section__item" key={id}>
      <div>
        <img className="comment-section__image" alt=""></img>
      </div>
      <article className="comment-section__section">
        <div className="comment-section__detail">
          <p className="comment-section__name">{name}</p>
          <p className="comment-section__date">{getDate(date)}</p>
        </div>
        <p className="comment-section__text">{comment}</p>
      </article>
    </li>
  );
};

export default CommentItem;
