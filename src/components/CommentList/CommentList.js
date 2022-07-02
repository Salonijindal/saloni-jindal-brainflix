import React from "react";
import CommentItem from "../CommentItem/CommentItem";

const CommentList = (props) => {
  console.log("Comment list:----", props);
  const commentList = props.commentList.comment;
  return (
    <ul class="comment-section__list">
      {commentList.map((comment) => {
        return (
          <CommentItem
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
