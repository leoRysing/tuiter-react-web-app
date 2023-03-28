import React from "react";
import "../tuits/tuits.css";
const PostSummaryItem = (
    {
      post = {
        "topic": "Space",
        "userName": "SpaceX",
        "time": "2h",
        "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
        "image": "tesla.png"
      }
    }
) => {
  return(
      <li className="list-group-item">
        <div className="row">
          <div className="col-10">
            <div>
              {post.userName}
              <i className={"bi bi-check-circle-fill tuit-verified"}></i>. {post.time}
            </div>
            <div className="fw-bolder">{post.topic}</div>
            <div>{post.tuit}</div>
          </div>
          <div className="col-2">
            <img width={70} height={70} className="float-end rounded-3" src={`/images/${post.image}`} alt={""}/>
          </div>
        </div>
      </li>
  );
};
export default PostSummaryItem;