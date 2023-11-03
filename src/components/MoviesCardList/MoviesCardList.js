import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";


const MoviesCardList = ({ movies, onSave, onDeleteMovie }) => {
  
  return (
    <>
    <section className="movies-list">
      {movies?.map((movie) => {
        return (
          <MoviesCard
            key={movie.id}
            movie={movie}
            onSave={onSave}
            onDeleteMovie={onDeleteMovie}
          />
        );
      })}
    </section>
  </>
);
};

export default MoviesCardList;
