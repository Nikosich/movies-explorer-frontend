import React from "react";
import "./SearchForm.css";
import search from "../../images/find-icon.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

const SearchForm = () => {
  return (
    <section className="search">
      <form className="search__form">
        <div className="search__searcher">
          <img className="search__icon" src={search} alt="search" />
          <input
            type="text"
            name="movie"
            placeholder="Фильм"
            className="search__input"
            required
          ></input>
          <button className="search__submit">Найти</button>
        </div>
        <div className="search__shorts">
          <FilterCheckbox />
          <h2 className="search__text">Короткометражки</h2>
        </div>
      </form>
      <div className="search-line"></div>
    </section>
  );
};

export default SearchForm;
