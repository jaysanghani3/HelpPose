import React,{useContext} from "react";
import SharedContext from "../../context/SharedContext";

const QuestionCard = (props) => {
  const question = props.question;

  const { setModelId } = useContext(SharedContext);
  
  const handleClick = (id) => {
    setModelId(id);
  };

  return (
    <div>
      <div className="d-flex align-items-center overflow-hidden flex-shrink-1 text-truncate col-auto">
        <button type="button" style={{ color: "#00294D" }} className="border-0 p-0 text-truncate bg-transparent" data-bs-toggle="modal" data-bs-target="#QuestionModal" onClick={() => handleClick(question.id)}>
          <span className="fw-semibold" style={{ fontSize: "19px", letterSpacing: "1px" }}>
            {question.name}
          </span>
          <span style={{  letterSpacing: "0.3px",fontSize: "15px", color: "#004475" }}> - {question.shortDescription}</span>
        </button>
      </div>

      <div className="my-2">
        {question.badges.map((badge, index) => {
          badge.name = badge.name.replace("New", "");
          return <button data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          data-bs-title="{badge.descriptionHtml}" type="button" 
          key={index}
          className="badge myBadge me-3 text-capitalize">{badge.name}</button>;
        })}
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
