import React, {useState} from "react";
import "./tuits.css";
import {updateTuitThunk} from "../../services/tuit-thunks";
import {useDispatch} from "react-redux";


const TuitStat = ({ tuit }) => {
  const [liked, setLiked] = useState(tuit.liked);
  const onClickLike = () => {
    setLiked(!liked);
  }
  const dispatch = useDispatch();

  return (
      <div className={"row w-100"}>
        <span className={"col-3"}><i className={"bi bi-chat tuit-icon"}></i> {tuit.replies} </span>
        <span className={"col-3"}><i className={"bi bi-arrow-repeat tuit-icon"}></i> {tuit.retuits}</span>
        <span className={"col-3"}>
          <i onClick={() => dispatch(updateTuitThunk({
            ...tuit,
            likes: tuit.likes + 1
          }))} className="bi bi-heart-fill me-2 text-danger"></i>
          {tuit.likes}
        </span>
        <i className={"bi bi-share col-3"}></i>
      </div>
  )
}

export default TuitStat;