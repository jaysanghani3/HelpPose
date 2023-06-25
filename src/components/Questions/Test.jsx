import React, { useContext } from "react";
import SharedContext from "../../context/SharedContext";
const Test = () => {
  const { totalTestsCount, test } = useContext(SharedContext);

  return (
    <div>
      <div className="col-12 d-flex justify-content-between p-0">
        <div className="text-muted fw-semibold">{totalTestsCount} tests</div>
        <div className="text-muted fw-semibold" style={{ cursor: "pointer" }}>
          View Tests
        </div>
      </div>

      <div className="row d-none d-md-block">
        <div className="col p-0">
          <div className="row d-flex justify-content-between">
            {test.length ? (
              test?.slice(0, 3).map((test, index) => {
                return (
                  <div key={index} className="col-3 m-3 rounded d-flex border flex-grow-1 p-3">
                    <div className="p-2">{/* <img src={test?.iconUrl} alt="icon" /> */}</div>
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
