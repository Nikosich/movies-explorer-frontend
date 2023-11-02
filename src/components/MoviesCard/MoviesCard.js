import React from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";

function MoviesCard({movie, onSave, onDeleteMovie }) {
  let location = useLocation();

  const hours = Math.floor(movie.duration/60);
  const min = movie.duration-(hours*60);
  

  function handleSaveMovie(e) {
    e.preventDefault();
    onSave(movie);
  }

  function handleDeleteMovie(e) {
    e.preventDefault();
    onDeleteMovie(movie);
  }

  return (
    <>
      <div className="movie">
        <div className="movie__trailer" >       
        <a href={movie.trailerLink} target="_blank" rel="noreferrer"> 
        {location.pathname === "/movies" ? (
          <img src={`https://api.nomoreparties.co${movie.image.url}`} alt="Постер" className="movie__image" />
        ) : (
          <img src={`https://api.nomoreparties.co${movie.image}`} alt="Постер" className="movie__image" />
        )} </a> 
        
          <button
            className={`${
              location.pathname === "/movies"
                ? "movie__button"
                : "movie__button_active"
            }`}
            type="button"
            onClick={handleSaveMovie}
          >
            {" "}
            Сохранить{" "}
          </button>
          <button
            className={`${
              location.pathname === "/movies"
                ? "movie__saved"
                : "movie__saved_delete"
            }`}
            type="button"
            onClick={handleDeleteMovie}
          ></button>
        </div>

        <div className="movie__info">
          <p className="movie__name">{movie.nameRU}</p>
          <p className="movie__duration">{hours ? `${hours}ч` : ''} {min ? `${min}м` : ''}</p>
        </div>
      </div>
    </>
  );
}

export default MoviesCard;
