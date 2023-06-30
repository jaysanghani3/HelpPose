import React from "react";
import Header from "./Header/Header";
import Skills from "./Skills/Skills";
import Questions from "./Questions/Questions";
import "./HelpPose.css";
import { Link } from "react-router-dom";

const HelpPose = () => {
  return (
    <div className="d-flex flex-column mx-auto" style={{ maxWidth: "130em" }}>
      <Header />

      <div className="container">
        <div className="d-flex justify-content-between px-5 py-1  flex-grow-1 ">
          <div className="fs-4 fw-semibold">Library</div>
          <Link to="/create-question" className="">
            <button className="btn btn-success w-A px-4">Create Question</button>
          </Link>
        </div>

        <div className="row mx-auto w-100 pt-4 px-xl-5 px-md-2">
          <div className="d-none d-md-block col-12 col-md-4 col-lg-3">
            <Skills />
          </div>

          <div className="col-12 col-md-8 col-lg-9 rounded-2 ">
            <Questions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPose;
