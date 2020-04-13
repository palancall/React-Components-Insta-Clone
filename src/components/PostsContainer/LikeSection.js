// look at the likes on this component. Right now it is hard coded on line 20.
// console.log your props and see how to add likes to this component so that it will update when you click the icon.
// HINT: You will need to add an onClick event pass through your props and update the hard coded Likes
import React, { useState } from "react";

const LikeSection = (props) => {
  const setLikes = props.setLikes;
  const likes = props.likes;
  const colors = {
    red: "❤️",
    clear: "💙",
  };
  const [color, setColor] = useState(colors.clear);

  function handleClick() {
    if (color === colors.clear) {
      setColor(colors.red);
      setLikes(likes + 1);
    } else {
      setColor(colors.clear);
      setLikes(likes - 1);
    }
  }
  console.log(likes);
  console.log(color);
  return (
    <div>
      <div className="like-section" key="likes-icons-container">
        <div onClick={handleClick} className="like-section-wrapper">
          <span className={"fa-heart"}>{color}</span>
        </div>
        <div className="like-section-wrapper">
          <img
            alt="comment img"
            src="data:image/png;base64,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"
            className="far fa-comment"
          />
        </div>
      </div>
      <p className="like-number">{likes} likes</p>
    </div>
  );
};

export default LikeSection;
