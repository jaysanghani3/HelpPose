import React, { useState } from "react";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="row justify-content-center align-items-center p-0">
      <div className="col-12 col-xl-auto d-flex flex-wrap py-1 px-3 ps-md-3">
        <div className="input-group">
          <i className="bi bi-search input-group-text" />
          <input type="text" placeholder="Search" className="form-control" name="input" value={search} onChange={handleSearch} />
        </div>
      </div>

      <div className="d-none d-md-block col-auto col-xl-auto ms-md-2 px-3 py-1">
        <button type="button" className="btn text-start bg-white">
          <i className="bi bi-funnel-fill"></i>
          <span className="d-none d-sm-inline-block ms-2">All Filters</span>
        </button>
      </div>

      <div className="d-block d-md-none flex-grow-1 col-auto col-xl-auto ms-md-2 px-3 py-1">
        <button type="button" className="btn text-start w-100 bg-white">
          <i className="bi bi-funnel-fill"></i>
          <span className=" ms-2">All Filters</span>
        </button>
      </div>
      <div className="d-block d-md-none flex-grow-1 col-auto col-xl-auto ms-md-2 px-3 py-1">
        <button type="button" className="btn text-start w-100 bg-white">
          <span className="ms-2">Skills & Roles</span>
        </button>
      </div>

      <div className="col-12 col-md-auto flex-grow-1 flex-xl-grow-0 col-xl-auto ms-md-auto px-3 py-1">
        <div className="input-group m-auto">
          <label className="bi bi-arrow-down-up input-group-text"></label>
          <select className="form-select" name="select">
            <option value="recommened">Recommened</option>
            <option value="shorter_duration">Shorter Duration</option>
            <option value="longer_duration">Longer Duration</option>
            <option value="easier_difficulty">Easier Difficulty</option>
            <option value="harder_difficulty">Harder Difficulty</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
