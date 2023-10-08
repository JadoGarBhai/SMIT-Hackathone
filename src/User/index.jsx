import React from "react";
import { Route, Routes } from "react-router-dom";
import Registration from "./Registration/Registration";

const index = () => {
  return (
    <Routes>
      <Route path="/registration" element={<Registration />} />
      <Route path="*" element={<>Page Not page</>} />
    </Routes>
  );
};

export default index;
