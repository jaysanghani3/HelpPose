import React, { useState } from "react";
import Header from "./Header/Header";
import Skills from "./Skills/Skills";
import Questions from "./Questions/Questions";
import "./HelpPose.css";

const HelpPose = () => {
  return (
    <div className="d-flex flex-column mx-auto" style={{ maxWidth: "130em" }}>
      <Header />
      
      {/* <div className="row bg-white">
        <div className="col d-flex justify-content-between">
          <span className="fw-semibold fs-4" style={{margin:"5px 60px"}}>Library</span>
        </div>
      </div> */}

      <div className="row mx-auto w-100 pt-4 px-xl-5 px-md-2 bg-white">
        <div className="d-none d-md-block col-12 col-md-4 col-lg-3">
          <Skills />
        </div>

        <div className="col-12 col-md-8 col-lg-9 bg-white rounded-2 ">
          <Questions />
        </div>
      </div>
    </div>
  );
};

export default HelpPose;
