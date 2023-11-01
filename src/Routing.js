import { Route, Routes } from "react-router-dom";
import Courses from "./dashboard/Courses/Courses";
import Students from "./dashboard/Students/Students";
import Attendence from "./dashboard/Attendence/Attendence";
import States from "./dashboard/States/States";

import React from "react";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<States />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/studence" element={<Students />} />
          <Route path="/attendence" element={<Attendence />} />
          <Route path="*" element={<>Page Not page</>} />
        </Route>
      </Routes>
    </>
  );
};

export default Routing;
