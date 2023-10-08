import React from "react";
import { Route, Routes } from "react-router-dom";
import States from "./Dashboard/States";

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<States />} />
    </Routes>
  );
};

export default index;
