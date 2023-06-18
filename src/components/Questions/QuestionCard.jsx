import React from "react";

const QuestionCard = (props) => {
  const question = props.question;

  const handleClick = (id) => {
    props.setId(id);
  };

  return (
    <div>
      <div className="d-flex align-items-center overflow-hidden flex-shrink-1 text-truncate col-auto">
        <button type="button" style={{ letterSpacing: "0.3px", color: "#00294D" }} className="border-0 p-0 text-truncate bg-transparent" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleClick(question.id)}>
          <span className="fw-semibold"  style={{fontSize: "19px", color:"#3c2364",letterSpacing:'1px'}}>{question.name}</span>
          <span style={{ fontSize: "15px", color: "#5e3e90" }}> - {question.shortDescription}</span>
        </button>
      </div>

      <div className="my-2">
        <button className="badge myBadge me-3 text-capitalize">{question.tags[0]}</button>
      </div>

      <div className="smallText">
        <span className="me-4 text-capitalize">
          <i className="bi bi-speedometer2 me-2" />
          {question.difficulty}
        </span>
        <span className="me-4 ">
          <i className="bi bi-clock me-2" />
          {question.timeLimit} min
        </span>
        <span className="me-4 text-uppercase">
          <i className="bi bi-code me-2 " />
          {question.type}
        </span>
        <span className="me-4 text-capitalize">
          <i className="bi bi-tag me-2"></i>
          {question.tags[0]}
        </span>
      </div>
    </div>
  );
};

export default QuestionCard;
