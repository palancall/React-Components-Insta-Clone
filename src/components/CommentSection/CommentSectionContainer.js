// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = (props) => {
  // Add state for the comments
  const [addComment, setAddComment] = useState(props.comments);

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {props.comments.map((comment, index) => {
        return (
          <Comment
            addComment={addComment}
            setComment={setAddComment}
            key={index}
            comment={comment}
          />
        );
      })}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
