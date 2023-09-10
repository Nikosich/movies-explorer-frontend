import React from "react";
import "./FilterCheckbox.css";

const FilterCheckbox = () => {
  return (
    <label className="checkbox">
      <input type="checkbox" className="checkbox__input"></input>
      <span className="checkbox__use"></span>
    </label>
  );
};

export default FilterCheckbox;
