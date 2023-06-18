import React, { createContext, useState } from "react";
import Header from "./Header/Header";
import Skills from "./Skills/Skills";
import Questions from "./Questions/Questions";
import SharedContext from "./SharedContext";
import "./HelpPose.css";

const HelpPose = () => {
  const [sharedValue, setSharedValue] = useState(0);
  return (
    <div className="d-flex flex-column mx-auto" style={{ maxWidth: "130em" }}>
      <Header />

      <div className="row mx-auto w-100 mt-3 pe-2">

        <SharedContext.Provider value={{ sharedValue: sharedValue, setSharedValue: setSharedValue }}>
          <div className="d-none d-md-block col-12 col-md-3">
            <Skills />
          </div>

          <div className="col-12 col-md-9 bg-white p-3 rounded-2">
            <Questions />
          </div>
        </SharedContext.Provider>

      </div>
    </div>
  );
};

export default HelpPose;