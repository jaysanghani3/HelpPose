import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="py-3 titleName ">
      <section className="text-center">
        <h3 className="display-2 text-white " style={{letterSpacing:'3px'}}> Help Pose </h3>
        <p className="text-capitalize mt-4" style={{color:'rgba(245, 245, 245, 0.786)', letterSpacing:'3px',wordSpacing:'6px'}}> All Questions grouped by skill </p>
      </section>
    </div>
  );
};

export default Header;
