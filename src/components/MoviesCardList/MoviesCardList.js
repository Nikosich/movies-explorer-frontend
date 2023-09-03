import React from "react";
import "./MoviesCardList.css";
import Cards from "../MoviesCard/MoviesCard";
import AddFilm from "../AddFilm/AddFilm";

const MoviesCardList = () => {
  const [seenCards, setSeenCards] = React.useState(12);

  const handleShowMore = () => {
    setSeenCards((notSeenCards) => {
      const cards= 16 - notSeenCards;
      return notSeenCards + Math.min(12, cards);
    });
  };

  return (
    <>
      <section className="movies-list">
        {[...Array(seenCards)].map((_, index) => (
          <Cards key={index} />
        ))}
      </section>
      {seenCards < 16 && <AddFilm handleShowMore={handleShowMore} />}
    </>
  );
};

export default MoviesCardList;
