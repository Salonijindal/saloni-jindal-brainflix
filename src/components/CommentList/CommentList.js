import React from "react";
import CommentItem from "../CommentItem/CommentItem";

const CommentList = (props) => {
  const commentList = props.commentList.comment;
  return (
    <ul className="comment-section__list">
      {commentList.map((comment, index) => {
        return (
          <CommentItem
            key={`${props.commentList.id}${index}`}
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
