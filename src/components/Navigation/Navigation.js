import "./Navigation.css";
import { useState } from "react";
import prof from "../../images/acc-pic.svg";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navigation = () => {
  const [showItems, setShowItems] = useState(false);
  let location = useLocation();

  const handleToggleMenu = () => setShowItems(!showItems);

  return (
    <nav className="navigation">
      <button
        className="navigation__btn-menu"
        type="button"
        onClick={handleToggleMenu}
      ></button>
      <div
        className={`navigation__container ${
          showItems ? "navigation__container_visible" : ""
        }`}
      >
        <div className="navigation__sidebar">
          <div className="navigation__list-container">
            <button
              className="navigation__btn-close"
              type="button"
              onClick={handleToggleMenu}
            ></button>
            <ul className="navigation__list">
              <li className="navigation__list-item navigation__list-item_type_main">
                <Link to="/" className="navigation__link">
                  Главная
                </Link>
              </li>
              <li className="navigation__list-item">
                <NavLink to="/movies" className="navigation__link" style={({ isActive }) =>({color: isActive ? 'pink' : 'black'})}>
                  Фильмы
                </NavLink>
              </li>
              <li className="navigation__list-item">
                <NavLink to="/saved-movies" className="navigation__link" style={({ isActive }) =>({color: isActive ? 'pink' : 'black'})}>
                  Сохранённые фильмы
                </NavLink>
              </li>
            </ul>
          </div>
          {location.pathname === "/" ? (
          <Link
          to="/profile"
          className="navigation__link navigation__link_type_profile naviagtion__link_main"
        >
          Аккаунт{" "}
          <img
            className="navigation__pic"
            alt="profile"
            src={prof}
          ></img>
        </Link>
        ) : (
          <Link
            to="/profile"
            className="navigation__link navigation__link_type_profile"
          >
            Аккаунт{" "}
            <img
              className="navigation__pic"
              alt="profile"
              src={prof}
            ></img>
          </Link>
        )} 
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
