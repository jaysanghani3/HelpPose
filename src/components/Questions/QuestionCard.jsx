import React from 'react'

const QuestionCard = (props) => {

    const question = props.question;

    const handleClick = (id) => {
        // console.log(id);
        props.setId(id);
    }
  return (
    <div>
      <div className="d-flex align-items-center overflow-hidden flex-shrink-1 text-truncate col-auto">
        <button type="button" style={{ letterSpacing: "0.3px", color: "#00294D" }} className="px-2 border-0 text-truncate bg-transparent" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleClick(question.id)}>
          <span className="fw-semibold">{question.name}</span>
          <span style={{ fontSize: "15px", color: "#004475" }}>- {question.shortDescription}</span>
        </button>
      </div>
    </div>
  )
}

export default QuestionCard
