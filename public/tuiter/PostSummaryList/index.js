import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js"
const PostSummaryList = () => {
  return (`
           <ul class="list-group wd-flush-with-picture">
            ${
      posts.map(post => {
        return(PostSummaryItem(post));}).join('')} 
           <!-- continue here -->
           </ul>
`); }

export default PostSummaryList;