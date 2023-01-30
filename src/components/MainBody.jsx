import React from "react";
import Home from "../routes/Home.jsx";
import { Routes, Route } from "react-router-dom";
import Shop from "../routes/Shop.jsx";
const MainBody = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/shop" element={<Shop />} />
    </Routes>
  );
};

export default MainBody;
