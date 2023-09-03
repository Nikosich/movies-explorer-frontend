import React from "react";
import "./Register.css";
import logo from "../../images/logo.svg";
import { Link, Route, Routes } from "react-router-dom";

const Register = () => {
  return (
    <main className="register">
      <Routes>
        <Route
          path="/"
          element={
            <Link id="signInImg" to="/">
              <img src={logo} alt="Логотип" className="register__logo" />
            </Link>
          }
        />
      </Routes>
      <h2 className="register__title">Добро пожаловать!</h2>
      <form className="register__form">
        <div className="register__inputs">
          <div className="register__input">
            <label htmlFor="signup" className="register__label">
              Имя
            </label>
            <input
              className="register__inlet"
              id="signup"
              required
              type="text"
              minLength="2"
              maxLength="40"
              defaultValue={"Никола"}
            ></input>
          </div>
          <div className="register__input">
            <label htmlFor="signup" className="register__label">
              E-mail
            </label>
            <input
              className="register__inlet"
              id="signup"
              required
              type="email"
              minLength="2"
              maxLength="40"
              defaultValue={"pochta@yandex.ru"}
            ></input>
          </div>
          <div className="register__input">
            <label htmlFor="signup" className="register__label">
              Пароль
            </label>
            <input
              className="register__inlet"
              id="signup-password"
              type="password"
              required
              minLength="2"
              maxLength="40"
              defaultValue={"nasoyashykalambur"}
            ></input>
          </div>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Link to="/signin" className="register__submit">
                  Зарегестрироваться
                </Link>
                <p className="register__question">
                  Уже зарегистрированы?
                  <Link to="/signin" className="register__login">
                    {" "}
                    Войти
                  </Link>
                </p>
              </>
            }
          />
        </Routes>
      </form>
    </main>
  );
};

export default Register;
