import React from "react";

import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="vh-100 col-xl-2 col-lg-2 col-md-3 col-sm-4 " id="navBar">
      <div className="col-4 text-center">Dashboard</div>
      <hr />
      <div id="sideBar" className="py-4">
        <div className="col-12 py-3 text-gradient">STATES</div>
        <div className="col-12 py-3 text-gradient">STUDENTS</div>
        <div className="col-12 py-3 text-gradient">COURSES</div>
        <div className="col-12 py-3 text-gradient">ATTENDENCE</div>
      </div>
    </div>
  );
};

export default SideBar;
