import React from "react";
import "./SavedMovies.css"
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import {useLocation} from "react-router-dom";

const SavedMovies = ({
  isLoading,
  savedMovies,
  onFilterCheckbox,
  isChecked,
  setIsChecked,
  onMovieSearch,
  onDeleteMovie,
  nothingFound,
}) => {

const location = useLocation();

  return (
    <main className="savedmovies">
      <SearchForm onSearch={onMovieSearch}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        onFilterCheckbox={onFilterCheckbox}/>
      {(isLoading && <Preloader/>) ||
          (nothingFound && <h2 className="movies__notfound">{nothingFound}</h2>) ?
          (<h2 className="movies__notfound">Ничего не найдено</h2>) :
        <MoviesCardList
          movies={savedMovies}
          onDeleteMovie={onDeleteMovie}
        />
      }
    </main>
  );
};

export default SavedMovies;
