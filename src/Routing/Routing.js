import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminDasboard from "../AdminDashboard";
import Registration from "../Registration/Registration";

const Index = () => {
  return (
    <Routes>
      <Route path="/*" element={<AdminDasboard />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="*" element={<h1>Page Not page</h1>} />
    </Routes>
  );
};

export default Index;
