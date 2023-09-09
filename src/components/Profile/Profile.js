import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <main className="profile">
      <h2 className="profile__hello">Привет, Никола!</h2>
      <form className="profile__form">
        <div className="profile__input">
          <label htmlFor="acc-name" className="profile__lable">
            Имя
          </label>
          <input
            className="profile__intel"
            id="acc-name"
            type="text"
            required
            minLength="2"
            maxLength="40"
            defaultValue={"Никола"}
            disabled
          ></input>
        </div>
        <div className="profile__input">
          <label htmlFor="acc-email" className="profile__lable">
            E-mail
          </label>
          <input
            className="profile__intel"
            id="acc-email"
            required
            type="text"
            minLength="2"
            maxLength="40"
            defaultValue={"pochta@yandex.ru"}
            disabled
          ></input>
        </div>
        <button className="profile__save">Сохранить</button>
        <button className="profile__edit">Редактировать</button>
        <button className="profile__quit">Выйти из аккаунта</button>
      </form>
    </main>
  );
};

export default Profile;
