import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../Home/Home";
import Methodical from "../Methodical/Methodical";
import Table from "../Table/Table";
import Blog from "../Blog/Blog";

const Navigation = () => {
  return (
    <div>
      <Routes>
        <Route path="/Teacher" element={<Home />} />
        <Route path="/Methodical" element={<Methodical />} />
        <Route path="/Table" element={<Table />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
    </div>
  );
};

export default Navigation;
