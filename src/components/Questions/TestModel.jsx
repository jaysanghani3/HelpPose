import React, { useContext } from "react";
import SharedContext from "../../context/SharedContext";

const TestModel = () => {
  const { testId, tests, setTestId } = useContext(SharedContext);
  const test = tests?.find((t) => t?.id === testId);
  const index = tests?.findIndex((q) => q?.id === testId);

  const handlePrevious = () => {
    if (index > 0) {
      setTestId(tests[index - 1].id);
    } else {
      setTestId(tests[tests.length - 1].id);
    }
  };

  const handleNext = () => {
    if (index < tests.length - 1) {
      setTestId(tests[index + 1].id);
    } else {
      setTestId(tests[0].id);
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
            {index < tests?.length - 1 && (
              <button className="modalBtn me-3 py-2 px-3" onClick={handleNext}>
                <i className="bi bi-chevron-double-right me-2"></i>Next
              </button>
            )}
          </div>
        </div>

        <div className="modal-body px-4">
          <div>
            <div className="row flex-nowrap justify-content-center align-items-center">
              <div className="col-auto text-truncate flex-grow-1 flex-shrink-1 overflow-hidden p-3">
                <img src={test?.skill.thumbnailUrl} alt="*" width="50px" height="50px"/>
                <span className="ms-3 fs-1 fw-semibold " style={{ letterSpacing: "2px", wordSpacing: "5px" }}>
                  {test?.seoName}
                </span>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-xl-9 col-lg-8 my-3 p-2">
                <div className="card-body p-2">
                  
                  <div className="row">
                    <div className="col-12">
                      <h3 className="mb-3">About the test</h3>
                      <p style={{ textAlign: "justify", letterSpacing: "0.6px" }} dangerouslySetInnerHTML={{ __html: test?.descriptionHtml ? test?.descriptionHtml : test?.shortDescription }} />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12">
                      <h3 className="mb-3">Sample public questions</h3>

                    </div>
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

export default TestModel;
