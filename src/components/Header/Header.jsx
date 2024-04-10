import React from "react";
import { Link } from "react-router-dom";

import "../styles/index.scss";

import Search from "../Search/Search";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header__components">
            <div className="header__item">
              <Link className="link__text" to="/Teacher">
                Главная
              </Link>
              <Link className="link__text" to="/Table">
                Расписание
              </Link>
              <Link className="link__text" to="/Methodical">
                Методические материалы
              </Link>
              <Link className="link__text" to="/Blog">
                Блог
              </Link>
            </div>
            <div className="header__search">
              <Search />
            </div>
          </div>
        </div>
      </div>
      <Navigation />
    </>
  );
};

export default Header;
