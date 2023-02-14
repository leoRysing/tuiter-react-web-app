const PostTopic = (topic) => {
  return(`<p class="wd-smaller-margins text-muted">${topic}</p>`)
}

const PostUser = (user) => {
  return(`
    <span>
      ${user}
      <i class="fas fa-check-circle"></i>
    <span>
  `)
}

const PostUserAndTime = (user, time) => {
  return(`
  <p class="fw-bold wd-smaller-margins">
    ${PostUser(user)}
    <span class="text-muted fw-light"> - ${time}</span>
  </p>
  `)
}

const PostSummaryItem = (post) => {
  return(`
  <li class="list-group-item">
    <div class="d-flex flex-row justify-content-between align-items-start">

      <div>
        ${PostTopic(post.topic)}
        ${PostUserAndTime(post.userName, post.time)}
        <p class="fw-bold wd-smaller-margins wd-smaller-text">
          ${post.title}
        </p>
      </div>
      <img src=${post.image} class="rounded-2 wd-image">
    </div>
  </li>
  
  `)
}

// topic: '',
//     userName: 'JavaScript',
//     time: '1 day',
//     title: 'JavaScript is programming language that can run on browsers as well as desktops',
//     image: '../../images/js.png',
//     tweets: '123K',

export default PostSummaryItem;