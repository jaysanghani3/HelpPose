import React, { useContext } from "react";
import Searchbar from "./Searchbar";
import QuestionCard from "./QuestionCard";
import Model from "./Model.jsx";
import SharedContext from "../../context/SharedContext";
import Test from "./Test";

const Questions = () => {
  const { questions, totalQuestionsCount, } = useContext(SharedContext);

  return (
    <>
      <div className="row justify-content-center align-items-center p-0">
        <Searchbar />
      </div>

      {/* <div className="row d-flex w-25 ms-3 p-0 bg-white"> */}
     

      <div className="row p-2 flex-grow-1">
        <Test />
      </div>
      <div className="row py-2 px-3">
        <div className="col-12">
          <span className="text-muted fw-semibold">{totalQuestionsCount} questions</span>
        </div>

        <div className="border rounded p-2">
          {questions.length ? (
            questions?.map((question, index) => {
              return (
                <div key={index} className="p-2 border-bottom pb-3">
                  <QuestionCard question={question} />
                </div>
              );
            })
          ) : (
            <div className="loadingParent">
              <div className="loader m-5 "></div>
            </div>
          )}
          <div className="modal fade right" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <Model />
          </div>
        </div>
      </div>
    </>
  );
};

export default Questions;
