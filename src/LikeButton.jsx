import { useState } from "react";

const LikeButton = () => {
    let [isLiked, setIsLiked] = useState(false);
    let [clicks, setClicks] = useState(0);

    let clicked = () => {
        console.log("clicked");
        setIsLiked(!isLiked);
        //    updating clicks value
        setClicks(clicks + 1);
    }
    let likeStyle = { color: "red" };
    return (
        <div>
            <p>Clicks={clicks}</p>
            <p onClick={clicked}>
                {!isLiked ? (<i className="fa fa-heart"></i>) : (<i className="fa-solid fa-heart-crack" style={likeStyle}></i>)}
            </p>
        </div>
    )
};

export default LikeButton
