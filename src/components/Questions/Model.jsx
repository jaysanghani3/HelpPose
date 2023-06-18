import React from "react";
const Model = (props) => {
  const question = props.questions?.find((question) => question?.id === props?.id);
  console.log(question);

  return (
    <div className="modal-dialog  m-0 ms-auto modalArea modal-xl modal-dialog-scrollable">
      <div tabIndex={-1} className="modal-content rounded-0" style={{ height: "100vh" }}>
        <div className="modal-header align-items-center">
          <button type="button" className="modalBtn py-2 px-3" data-bs-dismiss="modal">
            <i className="bi bi-arrow-left me-2" /> Back
          </button>
          <div className="ms-auto">
            <button className="modalBtn me-3 py-2 px-3">
              <i className="me-2 bi bi-chevron-double-left"></i>Previous
            </button>
            <button className="modalBtn me-3 py-2 px-3">
              Next<i className="bi bi-chevron-double-right ms-2"></i>
            </button>
          </div>
        </div>

        <div className="modal-body px-4">
          <div>
            <div className="row flex-nowrap justify-content-center align-items-center">
              <div className="col-auto text-truncate flex-grow-1 flex-shrink-1 overflow-hidden ">
                <h2 title="Products" className="text-truncate">
                  {" "}
                  {question?.name}{" "}
                </h2>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-xl-9 col-lg-8 border rounded my-3 p-2">
                <div className="card-body p-2">
                  <p style={{ textAlign: "justify", letterSpacing: "0.6px" }} dangerouslySetInnerHTML={{ __html: question?.descriptionHtml }} />
                </div>
              </div>

              <div className="col-12 col-xl-3 col-lg-4">
                <div className="Tags border rounded p-2 my-3">
                  <h4>Tags</h4>
                  <div className="d-flex flex-wrap mt-3">
                    {question?.tags.map((tag, index) => {
                      return (
                        <button key={index} className="badge myBadge my-1 me-1">
                          {tag}
                        </button>
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
                    Author : <a href="#">link...</a>
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
export default Model;
