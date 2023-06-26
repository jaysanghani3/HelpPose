import React, { useContext } from "react";
import FilterOffcanvas from "./FilterOffcanvas";
import SortingOptionButton from "./SortingOptionButton";
import SharedContext from "../../context/SharedContext";
import NestedAccordion from "../Skills/NestedAccordion";
const Searchbar = () => {
  const { search, handleSearch, filteredQuestionsData, filteredSkillsData } = useContext(SharedContext);

  return (
    <>
      <div className="py-1 px-3 ps-md-3 col-12 col-xl-auto">
        <div className=" position-relative  d-flex flex-wrap">
          <div className="input-group">
            <i className="bi bi-search input-group-text" />
            <input type="text" autoComplete="off" placeholder="Search" className="form-control" name="input" value={search} onChange={handleSearch} />
          </div>
          {search?.length > 0 && (
            <div className="position-absolute shadow px-4 py-2 bg-white w-100 show z-3" style={{ top: "43px" }}>
              <p className="text-muted fw-bold smallText mt-2">Skills</p>

              {search?.length > 0 &&
                filteredSkillsData.slice(0, 3).map((skill, index) => (
                  <div key={index} className="">
                    <h6 className="text-primary">{skill}</h6>
                  </div>
                ))}
              {search?.length > 0 && <p className="text-muted fw-bold smallText mt-2">Questions</p>}

              {search?.length > 0 &&
                filteredQuestionsData.slice(0, 3).map((question, index) => (
                  <div key={index} className="">
                    <h6 className="text-primary">{question}</h6>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>

      <div className="d-none d-md-block col-auto col-xl-auto ms-md-2 px-3 py-1">
        <button type="button" className=" modalBtn text-start py-2 " data-bs-toggle="offcanvas" data-bs-target="#Filters" aria-controls="Filters">
          <i className="bi bi-funnel-fill"></i>
          <span className="d-none d-sm-inline-block ms-2">All Filters</span>
        </button>
      </div>

      <div className="d-block d-md-none flex-grow-1 col-auto col-xl-auto ms-md-2 px-3 py-1">
        <button type="button" className="modalBtn text-start w-100 py-2" data-bs-toggle="offcanvas" data-bs-target="#Filters" aria-controls="Filters">
          <i className="bi bi-funnel-fill"></i>
          <span className=" ms-2">All Filters</span>
        </button>
      </div>

      <div className="d-block d-md-none flex-grow-1 col-auto col-xl-auto ms-md-2 px-3 py-1">
        <button type="button" className="modalBtn text-start w-100 py-2" data-bs-toggle="offcanvas" data-bs-target="#Skills" aria-controls="Skills">
          <span className="ms-2">Skills & Roles</span>
        </button>
      </div>
      
      <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex={-1}  id="offcanvasWithBothOptions" aria-labelledby="Skills">
        <div className="offcanvas-header">
          <div className="py-2 text-center fw-semibold border-bottom rounded-top-2 offcanvas-title" id="Skills" style={{ backgroundColor: "#F2F5FD" }}>
            Skills & Roles
          </div>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <NestedAccordion />
        </div>
      </div>

      <div className="col-12 col-md-auto flex-grow-1 flex-xl-grow-0 col-xl-auto ms-md-auto px-3 py-1">
        <SortingOptionButton />
      </div>
      <FilterOffcanvas />
    </>
  );
};

export default Searchbar;
