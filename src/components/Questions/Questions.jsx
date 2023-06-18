import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Searchbar from "./Searchbar";
import QuestionCard from "./QuestionCard";
import Model from "./Model.jsx";
import SharedContext from "../SharedContext";
import "../../Loading.css";

const Questions = () => {

  const queAPI = "https://testdome.com/api/v3/questions?%24filter%5Bterm%5D=&%24filter%5BtermMatchType%5D=containsCaseInsensitive&%24filter%5Bsort%5D=none&%24filter%5Bskills%5D";
  const [questions, setQuestions] = useState([]);
const [id, setId] = useState(0);
  const { sharedValue, setSharedValue } = useContext(SharedContext);

  const urlWithId = `${queAPI}=${sharedValue}`;
  const [totalQuestionsCount, setTotalQuestionsCount] = useState(0);

  useEffect(() => {
    const getQuestions = async () => {
      const response = await axios.get(urlWithId);
      setTotalQuestionsCount(response?.data?.totalCount);
      setQuestions(response?.data?.value);
    };
    getQuestions();
  }, [sharedValue]);

  return (
    <>
      <Searchbar />

      <div className="row p-2">
        <div className="col-12">
          <span className="text-muted fw-semibold">{totalQuestionsCount} questions</span>
        </div>

        <div className="border rounded p-2">
          {questions.length ? (
            questions?.map((question, index) => {
              return (
                <div key={index} className="p-2 border-bottom">
                  <QuestionCard question={question} setId={setId}/>
                </div>
              );
            })
          ) : (
            <div className="loadingParent"><div className="loader m-5 "></div></div>
          )}
          <div className="modal fade  right" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <Model questions={questions} id={id}/>
      </div>
        </div>
      </div>
    </>
  );
};

export default Questions;
