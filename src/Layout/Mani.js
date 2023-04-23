import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";

const Mani = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Mani;
