import React from "react";
import TuitStat from "./tuitstats";
import {deleteTuitThunk} from "../../services/tuit-thunks";
import {useDispatch} from "react-redux";
import "./tuits.css";


const TuitItem = (
    { tuit }) => {
  // tuit has the following fields;
  // boolean - liked
  // integer - replies, retuits, likes
  // string - topic, userName, image, tuit
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  }
  return (
      <li className={"list-group-item"}>
        <div className={"d-flex flex-row justify-content-start"}>
          <img width="48" height="48" className={"tuit-picture"} src={`/images/${tuit.image}`} />

          <div className={"d-flex flex-row justify-content-between w-100"}>
            <div class={"w-100"}>
                <span className={"tuit-bold"}>{tuit.userName} </span>
                <i className={"bi bi-check-circle-fill tuit-verified"}></i>
                {tuit.handle} - {tuit.time}

                <p>
                  {tuit.tuit}
                </p>

                <TuitStat tuit={tuit}/>
            </div>
            <i className="bi bi-x-lg"
                 onClick={() => deleteTuitHandler(tuit._id)}></i>

          </div>

        </div>
      </li>
  );
}

export default TuitItem;