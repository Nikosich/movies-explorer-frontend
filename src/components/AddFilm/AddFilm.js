import React from "react";
import "./AddFilm.css";

const AddFilm = ({ handleShowMore }) => {
  return (
    <section className="more">
      <button className="more__button" onClick={handleShowMore}>
        Ещё
      </button>
    </section>
  );
};

export default AddFilm;
