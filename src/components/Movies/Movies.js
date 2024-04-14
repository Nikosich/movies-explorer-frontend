import "./Movies.css"
import React from "react";
import {useLocation} from 'react-router-dom';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import AddFilm from "../AddFilm/AddFilm";
import Preloader from '../Preloader/Preloader'

const Movies = ({
  handleSearch,
  movies,
  handleShowMore,
  isMore,
  isChecked,
  setIsChecked,
  onFilterCheckbox,
  isLoading,
  onSaveMovie,
}) => {
  const location = useLocation();
  return (
    <main className="movies">
      <SearchForm onSearch={handleSearch}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        onFilterCheckbox={onFilterCheckbox}/>
         {(isLoading && <Preloader/>) ||
        (location.pathname === "/movies"
          ? (localStorage.nothingFound && <h2 className="movies__notfound">{localStorage.nothingFound}</h2>)
          : (<h2 className="movies__notfound">Ничего не найдено</h2>)) ||
        <MoviesCardList
          movies={movies}
          onSave={onSaveMovie}
        />
      }
      {isMore &&
        <AddFilm
        handleShowMore={handleShowMore}
        />}
      <MoviesCardList />
    </main>
  );
};

export default Movies;
