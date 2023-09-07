import React from "react";
import { useLocation } from "react-router-dom";
import poster from "../../images/movie_pic.png";
import "./MoviesCard.css";

function MoviesCard(props) {
  let location = useLocation();

  return (
    <>
      <div className="movie">
        <div className="movie__trailer" >
          <img className="movie__image" src={poster} alt="Постер" />
          <button
            className={`${
              location.pathname === "/movies"
                ? "movie__button_save"
                : "movie__button_save_active"
            }`}
            type="button"
          >
            {" "}
            Сохранить{" "}
          </button>
          <button
            className={`${
              location.pathname === "/movies"
                ? "movie__button_saved"
                : "movie__button_delete"
            }`}
            type="button"
          ></button>
        </div>

        <div className="movie__info">
          <p className="movie__name">В погоне за Бенкси</p>
          <p className="movie__duration">1ч42м</p>
        </div>
      </div>
    </>
  );
}

export default MoviesCard;
