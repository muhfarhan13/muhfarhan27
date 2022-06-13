import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import WorkExperience from "../pages/WorkExperience";
import Skills from "../pages/Skills";
import Portfolio from "../pages/Portfolio";

const index = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/work-experience" element={<WorkExperience />} />
      <Route exact path="/skills" element={<Skills />} />
      <Route exact path="/portfolio" element={<Portfolio />} />
    </Routes>
  );
};

export default index;
