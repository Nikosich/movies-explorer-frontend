import React from "react";
import "./Page404.css";

const Page404 = () => {
  return (
    <main className="error">
      <p className="error__title">404</p>
      <p className="error__message">Страница не найдена</p>
      <a href="/" className="error__link">
        Назад
      </a>
    </main>
  );
};

export default Page404;
