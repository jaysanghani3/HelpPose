import React from "react";

const SortingOptionButton = () => {
  return (
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
  );
};

export default SortingOptionButton;
