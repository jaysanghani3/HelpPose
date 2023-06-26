import React from "react";

const TestCard = (props) => {
      const test = props.test;

      const handleClick = (id) => {
        console.log(id);
      };
  return (
    <div className="d-flex align-items-center col-auto p-3 pb-4">
      <button type="button" style={{ letterSpacing: "0.3px" }} className="px-2 border-0 bg-transparent text-start" onClick={() => handleClick(test?.id)}>
        <div className="fw-bold" style={{ fontSize: "17px", color: "#2885BA" }}>
          {test?.name}
        </div>
        <div className="fw-semibold text-wrap text-muted mt-1" style={{ fontSize: "15px", color: "#4e687e", lineHeight: "24px" }}>
          {test?.metaDescription}
        </div>
      </button>
    </div>
  );
};

export default TestCard;
