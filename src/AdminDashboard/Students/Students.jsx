import React, { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { firestore } from "../../Configure/firebase";
import { Link } from "react-router-dom";
import SideBar from "../../Components/Sidebar/SideBar";

const Students = () => {
  return (
    <div className="d-flex">
      <SideBar />

      <div className="col-10">
        <div className="col-12 bg-secondary-subtle px-2 d-flex justify-content-between ">
          <h1 className=".text-gradient">Students</h1>
          <div
            className="btn btn-secondary"
            style={{ height: "45px", marginTop: "4px" }}
          >
            <Link
              to={"/registration"}
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Add Students
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Students;
