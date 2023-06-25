import React, { useContext } from "react";
import FilterOffcanvas from "./FilterOffcanvas";
import SortingOptionButton from "./SortingOptionButton";
import SharedContext from "../../context/SharedContext";

const Searchbar = () => {

  const { search, handleSearch } = useContext(SharedContext);

  return (
    <>
        <div className="col-12 col-xl-auto d-flex flex-wrap py-1 px-3 ps-md-3">
          <div className="input-group">
            <i className="bi bi-search input-group-text" />
            <input type="text" placeholder="Search" className="form-control" name="input" value={search} onChange={handleSearch} />
          </div>
        </div>

        <div className="d-none d-md-block col-auto col-xl-auto ms-md-2 px-3 py-1">
          <button type="button" className="btn modalBtn text-start py-2 " data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
            <i className="bi bi-funnel-fill"></i>
            <span className="d-none d-sm-inline-block ms-2">All Filters</span>
          </button>
        </div>

        <div className="d-block d-md-none flex-grow-1 col-auto col-xl-auto ms-md-2 px-3 py-1">
          <button type="button" className="btn modalBtn text-start w-100 py-2 " data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
            <i className="bi bi-funnel-fill"></i>
            <span className=" ms-2">All Filters</span>
          </button>
        </div>
        <div className="d-block d-md-none flex-grow-1 col-auto col-xl-auto ms-md-2 px-3 py-1">
          <button type="button" className="btn modalBtn text-start w-100 py-2">
            <span className="ms-2">Skills & Roles</span>
          </button>
        </div>

        <div className="col-12 col-md-auto flex-grow-1 flex-xl-grow-0 col-xl-auto ms-md-auto px-3 py-1">
          <SortingOptionButton />
        </div>
      <FilterOffcanvas />
    </>
  );
};

export default Searchbar;
