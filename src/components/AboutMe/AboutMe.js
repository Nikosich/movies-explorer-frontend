import React from "react";
import "./AboutMe.css";
import avatar from "../../images/profilePhoto.png";

const AboutMe = () => {
  return (
    <section id="about-me" className="about">
      <h2 className="about__title">Студент</h2>
      <div className="about__columns">
        <div className="about__container">
          <div className="about__dev">
            <h3 className="about__name">Никола</h3>
            <p className="about__age">Вэб-разработчик, 24 года</p>
            <p className="about__description">
              Я родился в Москве, но большую часть жизни прожил в маленьких
              городах, 9 лет в Кисловодске и 5 в Ужице, что находится в Сербии.
              Отучился я на журфаке и даже работал на телевидении, однако в
              какой-то момент моя работа мне стала неприятна. И я решил заняться
              тем, что было мне интересно еще в школе, а именно
              программирование. Сейчас я начинающий веб-разработчик.
            </p>
          </div>
          <a
            href="https://github.com/Nikosich"
            rel="noreferrer"
            target="_blank"
            className="about__github"
          >
            Github
          </a>
        </div>
        <img src={avatar} alt="Ваш аватар" className="about__photo" />
      </div>
    </section>
  );
};

export default AboutMe;
