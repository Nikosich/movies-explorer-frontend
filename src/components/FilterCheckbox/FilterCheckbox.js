import React from "react";
import "./FilterCheckbox.css";

const FilterCheckbox = ({ isChecked, setIsChecked, onFilterCheckbox }) => {
  function handleChange (e) {
    setIsChecked(e.target.checked);
    onFilterCheckbox(e.target.checked);
  };
  return (
    <label className="checkbox">
      <input type="checkbox" className="checkbox__input" сhecked={isChecked}
        onChange={handleChange}></input>
      <span className="checkbox__use"></span>
    </label>
  );
};

export default FilterCheckbox;
