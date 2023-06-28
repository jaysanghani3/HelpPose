import React, { useContext } from "react";
import SharedContext from "../../context/SharedContext";
import IDLE from "./IDLE";
const QuestionModel = () => {
  const { questions, modelId, setModelId } = useContext(SharedContext);
  const question = questions?.find((q) => q?.id === modelId);
  const index = questions?.findIndex((q) => q?.id === modelId);

  const handlePrevious = () => {
    if (index > 0) {
      setModelId(questions[index - 1].id);
    } else {
      setModelId(questions[questions.length - 1].id);
    }
  };

  const handleNext = () => {
    if (index < questions.length - 1) {
      setModelId(questions[index + 1].id);
    } else {
      setModelId(questions[0].id);
    }
  };

  return (
    <div className="modal-dialog  m-0 ms-auto modalArea modal-xl modal-dialog-scrollable">
      <div tabIndex={-1} className="modal-content rounded-0" style={{ height: "100vh" }}>
        <div className="modal-header align-items-center">
          <button type="button" className="modalBtn py-2 px-3" data-bs-dismiss="modal">
            <i className="bi bi-arrow-left me-2" /> Back
          </button>
          <div className="ms-auto">
            {index > 0 && (
              <button className="modalBtn me-3 py-2 px-3" onClick={handlePrevious}>
                <i className="bi bi-chevron-double-left me-2"></i>Previous
              </button>
            )}
            {index < questions.length - 1 && (
              <button className="modalBtn me-3 py-2 px-3" onClick={handleNext}>
                <i className="bi bi-chevron-double-right me-2"></i>Next
              </button>
            )}
          </div>
        </div>

        <div className="modal-body px-4">
          <div>
            <div className="row flex-nowrap justify-content-center align-items-center">
              <div className="col-auto text-truncate flex-grow-1 flex-shrink-1 overflow-hidden ">
                <h2 title="Products" className="text-truncate">
                  {question?.name}
                </h2>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-xl-9 col-lg-8 border rounded my-3 p-2">
                <div className="card-body p-2">
                  <p style={{ textAlign: "justify", letterSpacing: "0.6px", fontSize:"18px" }} dangerouslySetInnerHTML={{ __html: question?.descriptionHtml ? question?.descriptionHtml : question?.shortDescription }} />

                  <div className="mt-5">
                  <header className="fw-5 fw-semibold mb-3">{question?.badges[0].name}</header>
                  {/* {question?.template} */}
                  <IDLE />
                  </div>
                </div>
              </div>

              <div className="col-12 col-xl-3 col-lg-4">
                <div className="Tags border rounded p-2 my-3">
                  <h4>Tags</h4>
                  <div className="d-flex flex-wrap mt-3">
                    {question?.badges?.map((badge, index) => {
                      badge.name = badge.name.replace("New", "");
                      return (
                        <span key={index} className="badge myBadge me-3 mb-2  text-capitalize">
                          {badge.name}
                        </span>
                      );
                    })}
                  </div>
                </div>

                <div className="Information border rounded p-2 my-3">
                  <h4>Information</h4>
                  <div className="smallText mt-3">
                    Difficulty : <span>{question?.difficulty}</span>
                  </div>
                  <div className="smallText">
                    Duration : <span>{question?.timeLimit} min</span>
                  </div>
                  <div className="smallText">
                    Author : <a href="/">link...</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default QuestionModel;
