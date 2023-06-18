import React from "react";
import SortingOptionButton from "./SortingOptionButton";

const FilterOffcanvas = () => {
  const questionsTypes = ["Multiple Choice", "Live Coding", "Multiple Correct Answers", "Muliple MCQ", "Text Answer", "Number Picker", "Fill the Blacks", "File Upload", "File Upload with Validators", "Quality Assurance"];
  return (
    <form>
      <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div className="offcanvas-header pb-3 border-bottom">
          <button type="button" className="modalBtn py-2 pe-4" data-bs-dismiss="offcanvas">
            <i className="ps-2 bi bi-arrow-left" /> Back
          </button>
          <h4 className="offcanvas-title" id="offcanvasWithBothOptionsLabel" style={{ color: "#5e3e90" }}>
            Filters
          </h4>
          <button type="reset" className="modalBtn py-2 px-4">
            Reset All
          </button>
        </div>
        <div className="offcanvas-body">
          <SortingOptionButton />

          <div class="accordion accordion-flush " id="accordionFlushExample" style={{fontSize:'18px'}}>
            <div class="accordion-item border rounded my-3">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  Question Sets
                </button>
              </h2>
              <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="Public" />
                    <label className="form-check-label" for="Public">
                      Public
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="Premium" />
                    <label className="form-check-label" for="Premium">
                      Premium
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion-item  border rounded my-3">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  Qustion Types
                </button>
              </h2>
              <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  {questionsTypes.map((type, index) => {
                    return (
                      <div className="form-check" key={index}>
                        <input className="form-check-input" type="checkbox" value="" id={type} />
                        <label className="form-check-label" for={type}>
                          {type}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div class="accordion-item  border rounded my-3">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  Difficulty Level
                </button>
              </h2>
              <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="Easy" />
                    <label className="form-check-label" for="Easy">
                      Easy
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="Hard" />
                    <label className="form-check-label" for="Hard">
                      Hard
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FilterOffcanvas;
