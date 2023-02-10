const WhoToFollowListItem = (who) => {
  return(`
      <li className="list-group-item">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-start align-items-center">

            <img className="wd-post-image rounded-circle"
                 src=${who.avatarIcon}/>

            <div>
              <p className="wd-smaller-margins fw-bold">
                ${who.userName}
                <i className="fas fa-check-circle"></i>
              </p>
              <span className="wd-smaller-margins">@{who.handle}</span>
            </div>
          </div>

          <button className="btn btn-primary rounded-pill btn-sm">
            Follow
          </button>
        </div>
      </li>
  `)
}

export default WhoToFollowListItem;
