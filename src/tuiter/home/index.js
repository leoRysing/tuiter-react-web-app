import React from "react";
import TuitList from "../tuits/tuitslist";
import WhatsHappening from "./whats-happening";
const HomeComponent = () => {
  return (
      <div>
        <h2>Home</h2>
        <WhatsHappening/>
        <TuitList/>
      </div>
  )
}

export default HomeComponent;