import React, {useState} from "react";
import "./tuits.css";
import {updateTuitThunk} from "../../services/tuit-thunks";
import {useDispatch} from "react-redux";


const TuitStat = ({ tuit }) => {
  const dispatch = useDispatch();
  const onClickLike = () => {
    const liked = !tuit.liked;
    console.log(liked);
    const likes = liked ? tuit.likes + 1 : tuit.likes - 1;
    console.log(likes);
    dispatch(updateTuitThunk({
      ...tuit,
      likes: likes,
      liked: liked,
    }));
  };

  return (
      <div className={"row w-100"}>
        <span className={"col-3"}><i className={"bi bi-chat tuit-icon"}></i> {tuit.replies} </span>
        <span className={"col-3"}><i className={"bi bi-arrow-repeat tuit-icon"}></i> {tuit.retuits}</span>
        <span className={"col-3"}>
          <i onClick={onClickLike} className={`bi ${tuit.liked ? " bi-heart-fill text-danger" : "bi-heart"} me-2`}></i>
          {tuit.likes}
        </span>
        <i className={"bi bi-share col-3"}></i>
      </div>
  )
}

export default TuitStat;