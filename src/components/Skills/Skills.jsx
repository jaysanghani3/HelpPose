import React from "react";
import NestedAccordion from "./NestedAccordion";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skillArea rounded">
      <div className="py-2 text-center fw-semibold rounded-top-2" style={{ backgroundColor: "#B0A8B9" }}>
        Skills & Roles
      </div>
      <NestedAccordion />
    </div>
  );
};

export default Skills;
