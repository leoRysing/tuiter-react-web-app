import React, {useState} from "react";
import "./tuits.css";
import {updateTuitThunk} from "../../services/tuit-thunks";
import {useDispatch} from "react-redux";


const TuitStat = ({ tuit }) => {
  const dispatch = useDispatch();
  const onClickLike = () => {
    const liked = !tuit.liked;
    const likes = liked ? tuit.likes + 1 : tuit.likes - 1;
    dispatch(updateTuitThunk({
      ...tuit,
      likes: likes,
      liked: liked,
    }));
  };

  // TODO: onClickDislike
  const onClickDislike = () => {
    const disliked = !tuit.disliked;
    const dislikes = disliked ? tuit.dislikes + 1 : tuit.dislikes - 1;
    dispatch(updateTuitThunk({
      ...tuit,
      dislikes: dislikes,
      disliked: disliked,
    }));
  };

  // bi-hand-thumbs-down

  return (
      <div className={"row w-100"}>
        <span className={"col"}><i className={"bi bi-chat tuit-icon"}></i> {tuit.replies} </span>
        <span className={"col"}><i className={"bi bi-arrow-repeat tuit-icon"}></i> {tuit.retuits}</span>
        <span className={"col"}>
          <i onClick={onClickLike} className={`bi ${tuit.liked ? " bi-heart-fill text-danger" : "bi-heart"} me-2`}></i>
          {tuit.likes}
        </span>
        <span className={"col"}>
          <i onClick={onClickDislike} className={`bi ${tuit.disliked ? " bi-hand-thumbs-down-fill text-danger" : "bi-hand-thumbs-down"} me-2`}></i>
          {tuit.dislikes}
        </span>
        <i className={"bi bi-share col"}></i>
      </div>
  )
}

export default TuitStat;