import React from "react";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__col">
          <div className="footer__logo">
            <p>YourLogo</p>
            <div className="logo__text">Личный блог учителя</div>
          </div>
          <div className="footer__info">
            <ul>
              <li>
                <a href="#">Родителям</a>
              </li>
              <li>
                <Link to="/Teacher">Обо мне</Link>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Детям</a>
              </li>
              <li>
                <Link to="/Table">Расписание</Link>
              </li>
              <li>
                <Link to="/Methodical">Методические указания</Link>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Интересное</a>
              </li>
              <Link to="/Blog">Блог</Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
