import React from "react";

import { MENU } from "../utils/constants";
import Search from "../Search/Search";

import "../styles/index.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__item">
        {MENU.map(({ link, name }) => (
          <div className="link__text" key={link}>
            <div to={`/${link}`}>{name}</div>
          </div>
        ))}
      </div>
      <div className="header__search">
        <Search />
      </div>
    </div>
  );
};

export default Header;
