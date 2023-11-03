import React from "react";
import "./SearchForm.css";
import search from "../../images/find-icon.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Validation from "../../hooks/Validation"
import { useLocation } from 'react-router-dom';

const SearchForm = ({ onSearch, isChecked, setIsChecked, onFilterCheckbox }) => {
  const location = useLocation();
  const {formValue, handleChange, setInput, isValid} = Validation();

  React.useEffect(() => {
    if (location.pathname === "/movies") {
      setInput(localStorage.input);
    } else {
      setInput('');
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    onSearch({
      input: formValue.movie,
    });
  }
  return (
    <section className="search">
      <form className="search__form"  noValidate onSubmit={handleSubmit} >
        <div className="search__searcher">
          <img className="search__icon" src={search} alt="search" />
          <input
            type="text"
            name="movie"
            required
            placeholder="Фильм"
            className="search__input"
            value={formValue.movie || ""}
            onChange={handleChange}
            minLength="1"
          ></input>
          <button className="search__submit">Найти</button>
        </div>
        <div className="search__shorts">
          <FilterCheckbox 
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          onFilterCheckbox={onFilterCheckbox}/>
          <h2 className="search__text">Короткометражки</h2>
        </div>
        {isValid && <span className="search__error">Нужно ввести ключевое слово</span>}
      </form>
      <div className="search-line"></div>
    </section>
  );
};

export default SearchForm;
