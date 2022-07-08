import React from "react";
import CommentItem from "../CommentItem/CommentItem";

const CommentList = ({ commentList }) => {
  return (
    <ul className="comment-section__list">
      {commentList.map((comment, index) => {
        return (
          <CommentItem
            key={`${commentList.id}${index}`}
            id={`${commentList.id}${index}`}
            name={comment.name}
            comment={comment.comment}
            date={comment.timestamp}
          />
        );
      })}
    </ul>
  );
};

export default CommentList;
