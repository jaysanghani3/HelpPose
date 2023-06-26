import React, { useContext, useState } from "react";
import Searchbar from "./Searchbar";
import QuestionCard from "./QuestionCard";
import Model from "./Model.jsx";
import SharedContext from "../../context/SharedContext";

const Questions = () => {
  const { totalTestsCount, questions, totalQuestionsCount, test } = useContext(SharedContext);

  const [showTest, setShowTest] = useState(true);
  const toggleView = () => {
    setShowTest(!showTest);
  };

  const handleClick = (id) => {
    console.log(id);
  };
  return (
    <>
      <div className="row justify-content-center align-items-center p-0">
        <Searchbar />
      </div>

      {questions.length ? (
        <>
          <div className="row mt-3 flex-grow-1">
            <div className="col-12 d-flex justify-content-between px-3">
              <div className="text-muted fw-semibold">{showTest ? totalTestsCount + " tests" : totalQuestionsCount + " questions"}</div>
              <div className="text-muted fw-semibold" style={{ cursor: "pointer" }} onClick={toggleView}>
                {showTest ? "View Test" : "View Questions"}
              </div>
            </div>

            {showTest
              ? test?.slice(0, 3).map((test, index) => {
                  return (
                    <div key={index} className="col-3 m-3 rounded d-flex border flex-grow-1 p-3">
                      <div className="p-2">{/* <img src={test?.iconUrl} alt="icon" /> */}</div>
                      <div className="p-2">{test?.name}</div>
                    </div>
                  );
                })
              : questions?.slice(0, 3).map((question, index) => {
                  return (
                    <div key={index} className="col-3 m-3 rounded d-flex border flex-grow-1 p-3 ">
                      <div key={index} className="overflow-hidden text-truncate">
                        <QuestionCard question={question} />
                      </div>
                    </div>
                  );
                })}
          </div>

          <div className="row py-2 px-3">
            {showTest ? (
              <>
                <div className="col-12">
                  <span className="text-muted fw-semibold">{totalQuestionsCount} questions</span>
                </div>

                <div className="border rounded p-2">
                  {questions?.map((question, index) => {
                    return (
                      <div key={index} className="p-2 border-bottom pb-3">
                        <QuestionCard question={question} />
                      </div>
                    );
                  })}
                </div>
              </>
            ) : (
              <>
                <div className="col-12">
                  <span className="text-muted fw-semibold">{totalTestsCount} test</span>
                </div>

                <div className="border rounded p-2">
                  {test?.map((test, index) => {
                    return (
                      <div key={index} className="p-2 border-bottom">
                        <div className="d-flex align-items-center col-auto">
                          <button type="button" style={{ letterSpacing: "0.3px", color: "#00294D" }} className="px-2 border-0 bg-transparent text-start" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleClick(test?.id)}>
                            <div className="fw-semibold my-2 fs-5">{test?.name}</div>
                            <div style={{ fontSize: "15px", color: "#004475" }}>{test?.metaDescription}</div>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
            <div className="modal fade right" id="QuestionModal" tabIndex={-1} aria-labelledby="QuestionModalLabel" aria-hidden="true">
              <Model />
            </div>
          </div>
        </>
      ) : (
        <div className="loadingParent">
          <div className="loader m-5 "></div>
        </div>
      )}
    </>
  );
};

export default Questions;
