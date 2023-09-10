import React from "react";
import "./Techs.css";

const Techs = () => {
  return (
    <section className="techs" id="technologys">
      <div className="techs__container">
        <h2 className="techs__title">Технологии</h2>
        <h3 className="techs__secondtitle">7 технологий</h3>
        <p className="techs__description">
          На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые
          применили в&nbsp;дипломном проекте.
        </p>
        <ul className="techs__list">
          <li className="techs__techno">HTML</li>
          <li className="techs__techno">CSS</li>
          <li className="techs__techno">JS</li>
          <li className="techs__techno">React</li>
          <li className="techs__techno">Git</li>
          <li className="techs__techno">Express.js</li>
          <li className="techs__techno">mongoDB</li>
        </ul>
      </div>
    </section>
  );
};

export default Techs;
