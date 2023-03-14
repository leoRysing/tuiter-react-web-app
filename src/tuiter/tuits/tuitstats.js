import React, {useState} from "react";
import "./tuits.css";

const TuitStat = ({ tuit }) => {
  const [liked, setLiked] = useState(tuit.liked);
  const onClickLike = () => {
    setLiked(!liked);
  }
  return (
      <div className={"row w-100"}>
        <span className={"col-3"}><i className={"bi bi-chat tuit-icon"}></i> {tuit.replies} </span>
        <span className={"col-3"}><i className={"bi bi-arrow-repeat tuit-icon"}></i> {tuit.retuits}</span>
        <span className={"col-3"} onClick={onClickLike}>
          <i className={`bi tuit-icon ${liked ? 'bi-heart-fill':'bi-heart'} ${liked ? 'tuit-liked':''}`}></i>
          {liked ? tuit.likes + 1 : tuit.likes}</span>
        <i className={"bi bi-share col-3"}></i>
      </div>
  )
}

export default TuitStat;