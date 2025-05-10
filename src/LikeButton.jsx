import { useState } from "react";

// applying styles
let headingStyle = {
  color: "red",
  fontFamily: "monospace",
};
let likeStyle = { color: "red" };

const LikeButton = () => {
  let [isLiked, setIsLiked] = useState(false);
  let [clicks, setClicks] = useState(0);

  let clicked = () => {
    console.log("clicked");
    setIsLiked(!isLiked);
    //    updating clicks value
    setClicks(clicks + 1);
  };

  return (
    <div>
      <h1 style={headingStyle}>Like Button</h1>
      <p>Clicks={clicks}</p>
      <p onClick={clicked}>
        {/* conditional rendering */}
        {!isLiked ? (
          <i className="fa fa-heart"></i>
        ) : (
          <i className="fa-solid fa-heart-crack" style={likeStyle}></i>
        )}
      </p>
    </div>
  );
};

export default LikeButton;
