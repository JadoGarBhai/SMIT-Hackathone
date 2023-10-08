import React from "react";
import { Route, Routes } from "react-router-dom";
import States from "./Dashboard/States";
import Students from "./Students/Students";
import Courses from "./Courses/Courses";
import Attendence from "./Attendence/Attendence";

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<States />} />
      <Route path="/students" element={<Students />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/attendence" element={<Attendence />} />
    </Routes>
  );
};

export default index;
