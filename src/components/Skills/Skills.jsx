import React from "react";
import NestedAccordion from "./NestedAccordion";

const Skills = () => {
  return (
    <div className="skillArea rounded border">
      <div className="py-2 text-center fw-semibold border-bottom rounded-top-2" style={{ backgroundColor: "#F2F5FD" }}>
        Skills & Roles
      </div>
      <NestedAccordion />
    </div>
  );
};

export default Skills;
