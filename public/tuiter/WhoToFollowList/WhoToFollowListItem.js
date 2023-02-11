const WhoToFollowListItem = (who) => {
  return(`
      <li class="list-group-item">
        <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex justify-content-start align-items-center">

            <img class="wd-post-image rounded-circle" src=${who.avatarIcon}>

            <div>
              <p class="wd-smaller-margins fw-bold">
                ${who.userName}
                <i class="fas fa-check-circle"></i>
              </p>
              <span class="wd-smaller-margins">@${who.handle}</span>
            </div>
          </div>

          <button class="btn btn-primary rounded-pill btn-sm">
            Follow
          </button>
        </div>
      </li>
  `)
}

export default WhoToFollowListItem;
