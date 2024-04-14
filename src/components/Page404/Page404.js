import React from "react";
import { Link } from 'react-router-dom';
import "./Page404.css";

const Page404 = () => {
  return (
    <main className="error">
      <p className="error__title">404</p>
      <p className="error__message">Страница не найдена</p>
      <Link to={-1} className="error__link">
        Назад
      </Link>
    </main>
  );
};

export default Page404;
