import "./Header.css";
import logo from "../../images/logo.svg";
import NavAuth from "../NavigationAuth/NavigationAuth";
import Navigation from "../Navigation/Navigation";
import { Link, Routes, Route, useLocation } from "react-router-dom";

const Header = () => {
  let location = useLocation();

  return (
    <header
      className={`${
        location.pathname !== "/" &&
        location.pathname !== "/movies" &&
        location.pathname !== "/saved-movies" &&
        location.pathname !== "/profile"
          ? "header__hidden"
          : location.pathname === "/"
          ? "header__auth"
          : "header"
      }`}
    > <div className="header__container">
      <Routes>
        {["/", "/movies", "/saved-movies", "/profile"].map((path) => (
          <Route
            path={path}
            key={path}
            element={
              <Link id="profileImg" to="/">
                <img
                  className="header__logo"
                  src={logo}
                  alt="Movies Explorer"
                />
              </Link>
            }
          />
        ))}
      </Routes>
      <div className="header__nav">
        <Routes>
          {["/movies", "/saved-movies", "/profile"].map((path) => (
            <Route
              key={path}
              path={path}
              element={
                <>
                  <Navigation />
                </>
              }
            />
          ))}
        </Routes>
      </div>
      <Routes>
        <Route path="/" element={<NavAuth />} />
      </Routes>
      </div>
    </header>
  );
};

export default Header;
