import React from "react";
import {Link} from "react-router-dom";

const NavigationItem = (
    {
      navItem = {
        "active": false,
        "iconString": "",
        "title": "",
        "link": "#"
      },
      setter
    }
) => {
  const onClickItem = () => {
    setter(navItem.title.toLowerCase())
  }
  return (
      <Link className={`list-group-item list-group-item-active
                    ${navItem.active === 'true' ?'active':''}`}
            to={navItem.link}
            onClick={onClickItem}>
        <div className="d-flex flex-row justify-content-start align-items-center">
          <i className={navItem.iconString}></i>
          <span className={"d-none d-xl-block"}>{navItem.title}</span>
        </div>
      </Link>
  )
}
export default NavigationItem;