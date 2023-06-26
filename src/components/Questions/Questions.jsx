import React, { useContext, useState } from "react";
import Searchbar from "./Searchbar";
import QuestionCard from "./QuestionCard";
import QuestionModel from "./QuestionModel.jsx";
import SharedContext from "../../context/SharedContext";
import TestCard from "./TestCard";
import TestModel from "./TestModel";

const Questions = () => {
  const { totalTestsCount, questions, totalQuestionsCount, tests,setTestId } = useContext(SharedContext);

  const [showTest, setShowTest] = useState(true);
  const toggleView = () => {
    setShowTest(!showTest);
  };

  const handleClick = (id) => {
    setTestId(id);
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
              ? tests?.slice(0, 3).map((test, index) => {
                  return (
                    <div key={index} data-bs-toggle="modal" data-bs-target="#TestModel" className="col-3 m-3 rounded d-flex border flex-grow-1 p-3 questionCard" style={{ cursor: "pointer" }} onClick={() => handleClick(test.id)}>
                      <div className="p-2">
                        <img src={test?.skill.thumbnailUrl} alt="*"  width="40px" height="40px" />
                      </div>
                      <div className="ms-3 fw-bold align-self-center" style={{ fontSize: "16px", color: "#2885BA"}}>{test?.name}</div>
                    </div>
                  );
                })
              : questions?.slice(0, 3).map((question, index) => {
                  return (
                    <div key={index} className="col-3 m-3 rounded d-flex border flex-grow-1 p-3 questionCard" style={{ cursor: "pointer" }} >
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

                <div className="border rounded p-0 ">
                  {questions?.map((question, index) => {
                    return (
                      <div key={index} className="p-2 border-bottom pb-3 questionCard">
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

                <div className="border rounded p-0">
                  {tests?.map((test, index) => {
                    return (
                      <div key={index} className="border-bottom questionCard">
                        <TestCard test={test} />
                      </div>
                    );
                  })}
                </div>
              </>
            )}
            <div className="modal fade right" id="QuestionModal" tabIndex={-1} aria-labelledby="QuestionModalLabel" aria-hidden="true">
              <QuestionModel />
            </div>
            <div className="modal fade right" id="TestModel" tabIndex={-1} aria-labelledby="TestModelLabel" aria-hidden="true">
              <TestModel />
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
