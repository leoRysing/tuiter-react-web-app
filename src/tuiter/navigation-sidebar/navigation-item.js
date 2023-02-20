import React from "react";

const NavigationItem = (
    {
      navItem = {
        "active": false,
        "iconString": "",
        "title": ""
      }
    }
) => {
  return (
      <a className={`list-group-item list-group-item-active
                    ${navItem.active === 'true' ?'active':''}`} href={"#"}>
        <div className="d-flex flex-row justify-content-start align-items-center">
          <i className={navItem.iconString}></i>
          <span className={"d-none d-xl-block"}>{navItem.title}</span>
        </div>
      </a>
  )
}
export default NavigationItem;