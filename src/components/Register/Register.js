import React from "react";
import "./Register.css";
import logo from "../../images/logo.svg";
import Validation from "../../hooks/Validation"
import { Link, Route, Routes } from "react-router-dom";

const Register = ({handleRegister, setErrorMessage, errorMessage, isAuthLoading}) => {
  const {formValue, error, resetValidation, handleChange, isValid} = Validation();

  function handleSubmit(e) {
    e.preventDefault();
    handleRegister(formValue);
  }

  function handleResetAll() {
    resetValidation();
    setErrorMessage('');
  }

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
      <form className="register__form"  onSubmit={handleSubmit}>
        <div className="register__inputs">
          <div className="register__input">
            <label className="register__label">
              Имя
            </label>
            <input
              className="register__inlet"
              id="signup-name"
              name="name"
              required
              type="text"
              minLength="2"
              maxLength="40"
              placeholder="Введите имя"
              value={formValue.name || ''}
              onChange={handleChange}
            ></input>
            <span className="register-name-error login__span">{error.name || ''}</span>
          </div>
          <div className="register__input">
            <label className="register__label">
              E-mail
            </label>
            <input
              className="register__inlet"
              id="signup-email"
              name="email"
              required
              type="email"
              placeholder="Введите почту"
              value={formValue.email || ''}
              onChange={handleChange}
            ></input>
            <span className="register-email-error login__span">{error.email || ''}</span>
          </div>
          <div className="register__input">
            <label  className="register__label">
              Пароль
            </label>
            <input
              className="register__inlet"
              id="signup-password"
              name="password"
              type="password"
              required
              minLength="8"
              maxLength="40"
              placeholder="Введите пароль"
              value={formValue.password || ''}
              onChange={handleChange}
            ></input>
            <span className="register-password-error login__span">{error.password || ''}</span>
          </div>
        </div>
        <p className="register__error">{errorMessage}</p>
        <button type="submit"
              className={`register__submit ${(isValid) ? '' : 'register__submit:disabled'}`}
              name="submit"
              disabled={!isValid}
              defaultValue="Зарегистрироваться">
                   {isAuthLoading ? "Регистрация..." : "Зарегестрироваться"}
                </button>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <p className="register__question">
                  Уже зарегистрированы?
                  <Link to="/signin" className="register__login" onClick={handleResetAll}>
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
