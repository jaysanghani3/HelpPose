import React, { useContext } from "react";
import Header from "../Header/Header";
import SharedContext from "../../context/SharedContext";

const CreateQuestion = () => {
  const { skills, topics, } = useContext(SharedContext);

  const topicArr =[];

  topics.map((item) => {
    topicArr.push(item.name);
  });

  const [selectedOptions, setSelectedOptions] = React.useState([]);

  const addToList = (event) => {
    const selectedOption = event.target.value;
    setSelectedOptions([...selectedOptions, selectedOption]);
  };

  const removeFromList = (index) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions.splice(index, 1);
    setSelectedOptions(updatedOptions);
  };
  return (
    <div>
      <Header />

      <div className="container">
        <div className="row">
          <div className="col d-flex justify-content-between">
            <span className="fs-4 fw-bold">
              New Coding Question
              <span className="myBadge badge myBadge mx-3 text-capitalize rounded-pill px-3 py-1 fs-6 fw-normal">MCQ</span>
            </span>

            <button className="btn btn-success">
              <i className="bi bi-save me-3"></i>Save
            </button>
          </div>
        </div>

        <div className="container mt-4 bg-white p-2 pt-4 rounded-4 border">
          <div className="row g-3 align-items-center">
            <div className="col-3 text-end">
              <label htmlFor="QueName" className="col-form-label">
                Question Name
              </label>
            </div>
            <div className="col-5 ">
              <input className="form-control" type="text" placeholder="Promblem" id="QueName" />
            </div>
          </div>

          <div className="row g-3 align-items-center my-1">
            <div className="col-3 text-end">
              <label htmlFor="QueDesc" className="col-form-label">
                Skill
              </label>
            </div>
            <div className="col-5 ">
              <select className="form-select" aria-label="Default select example">
                <option value="none">None</option>
                {
                  skills.map((skill) => 
                    skill.children.map((item1) => 
                      item1.skills.map((item2,index) => 
                       <option key={index}>{item2.name}</option>
                      // console.log(item2.name)
                    )
                  )
              )
                }
              </select>
            </div>
          </div>

          <div className="row g-3 align-items-center my-1">
            <div className="col-3 text-end">
              <label htmlFor="QueDesc" className="col-form-label">
                Topic
              </label>
            </div>
            <div className="col-5 ">
              <select className="form-select" aria-label="Default select example" onChange={addToList} >
                <option value="none">None</option>
                {topicArr.map((item,index) => {
                  return <option value={item} key={index}>{item}</option>;
                })}
               
              </select>
            </div>
          </div>

          <div className="row g-3 align-items-center my-1">
            <div className="col-3"></div>
            <div className="col-5">
              <div className="border order-primary-subtle rounded p-3 bg-light">
                {selectedOptions.map((option, index) => (
                  <span key={index} className="me-3 badge myBadge ps-3 py-2 text-primary">
                    {option}
                    <i className="bi bi-x-lg ms-2" onClick={() => removeFromList(index)}></i>
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="row g-3 align-items-center my-1">
            <div className="d-flex flex-column text-end col-3">
              <span>Expected Time</span>
              <small className="text-muted">(minutes)</small>
            </div>
            <div className="col-5">
              <div role="group" className="input-group rounded">
                <input name="timeLimit" type="range" max="10" min="0" step="1" className="range-input border-0 px-0 custom-range mt-md-2 form-control" />
                <div className="w-100 d-flex justify-content-between mx-2">
                  {[1, 2, 3, 5, 7, 10, 15, 20, 30, 40, 60].map((t, index) => (
                    <span className="d-flex justify-content-center text-nowrap" style={{ maxWidth: "0px" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-4 mt-0">
              <small className="text-muted ms-2">Only labeled values are allowed.</small>
            </div>
          </div>

          <div className="row g-3 align-items-center my-1">
            <div className="col-3 text-end">
              <label className="col-form-label">Difficulty</label>
            </div>
            <div className="col-5">
              {["Easy", "Medium", "Hard"].map((diff, index) => (
                <div className="form-check form-check-inline me-4" key={index}>
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id={diff} value={diff} />
                  <label className="form-check-label" htmlFor={diff}>
                    {diff}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="row g-3 align-items-center my-1">
            <div className="col-3 text-end">
              <label htmlFor="point" className="col-form-label">
                Points
              </label>
            </div>
            <div className="col-2">
              <select className="form-select">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((point, index) => (
                  <option value={point}>{point}</option>
                ))}
              </select>
            </div>
            <div className="col-7">
              <small className="text-muted">TestDome questions have between three and ten points, try to use a similar scale.</small>
            </div>
          </div>
        </div>

        <button className="btn btn-success mt-4">
          <i className="bi bi-save me-3"></i>Save
        </button>
      </div>
    </div>
  );
};

export default CreateQuestion;
