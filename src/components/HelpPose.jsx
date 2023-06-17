import React from "react";
import Navbar from "./Navbar";
import Skills from "./Skills";
import "./HelpPose.css";

const HelpPose = () => {
  return (
    <div className="d-flex flex-column mx-auto" style={{ maxWidth: "144em" }}>
      <Navbar />

      <div className="row p-0 mx-auto w-100" style={{ maxWidth: "144em" }}>
        <div className="d-none d-md-block col-12 col-md-3 p-3">
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default HelpPose;
