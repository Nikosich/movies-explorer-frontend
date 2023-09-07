import React from "react";
import logo from "../../images/logo.svg";
import "./Login.css";
import { Link, Route, Routes } from "react-router-dom";

const Login = () => {
  return (
    <main className="login">
      <Routes>
        <Route
          path="/"
          element={
            <Link id="logoImg" to="/">
              <img src={logo} alt="logo" className="login__logo" />
            </Link>
          }
        />
      </Routes>
      <h2 className="login__title">Рады видеть!</h2>
      <form className="login__form">
        <div className="login__inputs">
          <div className="login__input">
            <label htmlFor="singin" className="login__label">
              E-mail
            </label>
            <input
              className="login__inlet"
              id="singin"
              type="email"
              placeholder="Введите почту"
              required
              minLength="2"
              maxLength="40"
              defaultValue={"pochta@yandex.ru"}
            ></input>
          </div>
          <div className="login__input">
            <label htmlFor="singin" className="login__label">
              Пароль
            </label>
            <input
              className="login__inlet"
              id="singin"
              type="password"
              placeholder="Введите пароль"
              required
              minLength="2"
              maxLength="40"
              defaultValue={"nastoyashykalambur"}
            ></input>
          </div>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Link to="/signin" className="login__submit">
                  Войти
                </Link>
                <p className="login__ask">
                  Ещё не зарегистрированы?
                  <Link to="/signup" className="login__register">
                    {" "}
                    Регистрация
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

export default Login;
