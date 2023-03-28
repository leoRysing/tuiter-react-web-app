import React from "react";
import {useSelector} from "react-redux";
import PostSummaryItem
  from "./post-summary-item";
import {findTuitsThunk} from "../../services/tuit-thunks";

const PostSummaryList = () => {
  const {tuits, loading} = useSelector((state) => state.tuitsData);
  return(
      <ul className="list-group">
        {
            loading &&
            <li className="list-group-item">
              Loading...
            </li>
        }
        { !loading &&
          tuits.map(post =>
              <PostSummaryItem
                  key={post._id} post={post}/> )
        }
      </ul>
  );
};
export default PostSummaryList;