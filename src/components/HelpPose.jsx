import React, { useState } from "react";
import Header from "./Header/Header";
import Skills from "./Skills/Skills";
import Questions from "./Questions/Questions";
import "./HelpPose.css";

const HelpPose = () => {
  return (
    <div className="d-flex flex-column mx-auto" style={{ maxWidth: "130em" }}>
      <Header />
      

      <div className="row mx-auto w-100 pt-4 px-5 bg-white">
        <div className="d-none d-md-block col-12 col-md-3">
          <Skills />
        </div>

        <div className="col-12 col-md-9 bg-white rounded-2 ">
          <Questions />
        </div>
      </div>
    </div>
  );
};

export default HelpPose;
