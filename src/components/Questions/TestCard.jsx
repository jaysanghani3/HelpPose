import React,{useContext} from "react";
import SharedContext from "../../context/SharedContext";

const TestCard = (props) => {

      const test = props.test;
     
      const { setTestId } = useContext(SharedContext);

      const handleClick = (id) => {
        setTestId(id);
      };
      
  return (
    <div className="d-flex align-items-center col-auto p-3 pb-4">
      <div className="me-3 ms-2 text-center" style={{ width: "50px", height: "50px" }}>
        <img src={test?.skill.thumbnailUrl} alt="*" width="40px" height="40px" />
      </div>
      <button type="button" style={{ letterSpacing: "0.3px" }} className="px-2 border-0 bg-transparent text-start" data-bs-toggle="modal" data-bs-target="#TestModel" onClick={() => handleClick(test.id)}>
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
