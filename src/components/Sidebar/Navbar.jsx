import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="vh-100 col-xl-2 col-lg-2 col-md-3 col-sm-4 " id="navBar">
      <div className="col-4 text-center">Dashboard</div>
      <hr />
      <div id="sideBar" className="py-4">
        <div className="col-12 py-3">
          <Link to="/" className="text-gradient">
            STATES
          </Link>
        </div>
        <div className="col-12 py-3 text-gradient">
          <Link to="/students" className="text-gradient">
            STUDENTS
          </Link>
        </div>
        <div className="col-12 py-3 text-gradient">
          <Link to="/courses" className="text-gradient">
            COURSES
          </Link>
        </div>
        <div className="col-12 py-3 text-gradient">
          <Link to="/attendence" className="text-gradient">
            ATTENDENCE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
