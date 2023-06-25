import React from "react";

const Header = () => {
  return (
      <section className="text-center pt-2 titleName">
        <h3 className="display-4" style={{letterSpacing:'4px',wordSpacing:'6px'}}> Help Pose </h3>
        <p className="text-capitalize text-muted" style={{letterSpacing:'2px',wordSpacing:'2px'}}> All Questions grouped by skill </p>
      </section>
  );
};

export default Header;
