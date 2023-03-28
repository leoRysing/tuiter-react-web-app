import React, {useEffect, useState} from "react";
import ExploreComponent from "./explore";
import HomeComponent from "./home";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import {Routes, Route} from "react-router";
import Nav from "../nav";
import whoReducer
  from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import { configureStore }
  from '@reduxjs/toolkit';
import {Provider} from "react-redux";

const store = configureStore(
    {reducer: {who: whoReducer, tuitsData: tuitsReducer}});

function Tuiter() {
  const [active, setActive] = useState("home");

  return (
      <Provider store={store}>
        <div>
          <Nav />
          <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
              <NavigationSidebar active={active} setter={setActive}/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
              <Routes>
                <Route path="" element={<HomeComponent/>}/>
                <Route path="explore" element={<ExploreComponent/>}/>
              </Routes>
            </div>
            <div className="d-none d-md-none d-lg-block col-lg-4 col-xl-4">
              <WhoToFollowList/>
            </div>
          </div>

        </div>
      </Provider>
  );
}

export default Tuiter