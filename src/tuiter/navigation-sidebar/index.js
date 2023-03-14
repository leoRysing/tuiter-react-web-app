import React from "react";
import items from "./sidebar.js";
import NavigationItem from "./navigation-item";
const NavigationSidebar = (
    {
      active = 'explore',
      setter
    }
) => {

  const itemActive = items.map(function(item) {
    return {
      "active": `${active === item.title.toLowerCase()?true:false}`,
      "iconString": `${item.iconString}`,
      "title": `${item.title}`,
      "link": `${item.link}`
      };
    }
  );
  return (
      <div className="list-group">
        <a className="list-group-item list-group-item-active" href="#">
          <div className
                   ={"d-flex flex-row flex-start"}>
            <i className="bi bi-twitter wd-icons"></i>
            <span className={"d-none d-xl-block"}>Tuiter</span>
          </div>
        </a>
        {
          itemActive.map(item =>
              <div>
                <NavigationItem key={item._id} navItem={item} setter={setter} />
              </div>)
        }
      </div>
  );
};

export default NavigationSidebar;