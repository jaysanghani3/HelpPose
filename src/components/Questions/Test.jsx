import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Test = () => {
  const testApi = "https://testdome.com/api/v3/generators";

  // const testApi = `https://testdome.com/api/v3/questions/${testId}?%24expand=badges%2Ccollaborators%2CscoreDistribution%2CisReadOnly%2Cskill%2CenvironmentInfo%2CcodeLanguageVersion`;

  const [totalTestsCount, setTotalTestsCount] = useState(0);
  const [testId, setTestId] = useState(0);
  const [test, setTest] = useState([]);

  useEffect(() => {
    const getTest = async () => {
      const response = await axios.get(testApi);
      setTotalTestsCount(response?.data?.totalCount);
      setTest(response?.data?.value);
    };
    getTest();
  }, []);
  // console.log(test)

  return (
    // create a div which is full responsive which will contain total test count left side and right side have option view tests and below that a 3 div which will contain test name and icon

    <div className="row p-2">
      <div className="col-12 d-flex justify-content-between ">
        <div className="text-muted fw-semibold">{totalTestsCount} tests</div>
        <div className="text-muted fw-semibold" style={{ cursor: "pointer" }}>
          View Tests
        </div>
      </div>

      <div className="row d-none d-md-block">
        <div className="col-12">
          <div className="row d-flex justify-content-between">
            {test.length ? (
              test?.slice(0, 3).map((test, index) => {
                return (
                  <div key={index} className="col-3 m-3 rounded d-flex border flex-grow-1 p-3">
                    <div className="p-2">
                      <img src={test?.iconUrl} alt="icon" />
                    </div>
                    <div className="p-2">{test?.name}</div>
                  </div>
                );
              })
            ) : (
              <div className="loadingParent">
                <div className="loader m-5 "></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
