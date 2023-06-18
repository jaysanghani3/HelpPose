import React from "react";
import NestedAccordion from "./NestedAccordion";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skillArea rounded">
      <div className="py-2 text-center fw-semibold text-white rounded-top-2" style={{ backgroundColor: "#5e3e90"}}>
        Skills & Roles
      </div>
      <NestedAccordion />
    </div>
  );
};

export default Skills;
