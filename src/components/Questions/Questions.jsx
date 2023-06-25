import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Searchbar from "./Searchbar";
import QuestionCard from "./QuestionCard";
import Model from "./Model.jsx";
import SharedContext from "../SharedContext";
import Test from "./Test";

const Questions = () => {
  const queAPI = "https://testdome.com/api/v3/questions?%24filter%5Bterm%5D=&%24filter%5BtermMatchType%5D=containsCaseInsensitive&%24filter%5Bsort%5D=none&%24filter%5Bskills%5D";

  // https://testdome.com/api/v3/questions?%24filter%5Bterm%5D=&%24filter%5BtermMatchType%5D=containsCaseInsensitive&%24filter%5Bsort%5D=none&%24filter%5Bskills%5D=0&%24filter%5Btopic%5D=&%24filter%5Bdifficulty%5D=none&%24filter%5BreleaseStatus%5D=released&%24filter%5BquestionSets%5D=public&%24filter%5BproofreadStatus%5D=&%24filter%5BdeprecationStatus%5D=none&%24sort=none&%24expand=badges%2CscoreDistribution%2CisReadOnly&%24skip=0&%24top=20

  const [questions, setQuestions] = useState([]);
  const [id, setId] = useState(0);
  // const [selectViewType, setSelectViewType] = useState(<QuestionCard/>);
  const { sharedValue, setSharedValue } = useContext(SharedContext);

  const urlWithId = `${queAPI}=${sharedValue}&%24filter%5Btopic%5D=&%24filter%5Bdifficulty%5D=none&%24filter%5BreleaseStatus%5D=released&%24filter%5BquestionSets%5D=public&%24filter%5BproofreadStatus%5D=&%24filter%5BdeprecationStatus%5D=none&%24sort=none&%24expand=badges%2CscoreDistribution%2CisReadOnly&%24skip=0&%24top=20`;
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
      <Test />
        
      <div className="row py-2 px-3">
        <div className="col-12">
          <span className="text-muted fw-semibold">{totalQuestionsCount} questions</span>
        </div>

        <div className="border rounded p-2">
          {questions.length ? (
            questions?.map((question, index) => {
              return (
                <div key={index} className="p-2 border-bottom pb-3">
                  <QuestionCard question={question} setId={setId} />
                </div>
              );
            })
          ) : (
            <div className="loadingParent">
              <div className="loader m-5 "></div>
            </div>
          )}
          <div className="modal fade right" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <Model questions={questions} id={id} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Questions;
