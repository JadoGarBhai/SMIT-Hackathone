import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Frontend from "../Frontend";
import User from "../User";
import Admin from "../Admin";
const Index = () => {
  return (
    <Routes>
      <Route path="/*" element={<Frontend />} />
      <Route path="/user/*" element={<User />} />
      <Route path="/admin/*" element={<Admin />} />
      <Route path="*" element={<h1>Page Not page</h1>} />
    </Routes>
  );
};

export default Index;
