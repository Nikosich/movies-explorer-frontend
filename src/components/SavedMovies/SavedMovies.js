import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

const SavedMovies = () => {
  return (
    <main className="saved">
      <SearchForm />
      <MoviesCardList />
    </main>
  );
};

export default SavedMovies;
