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
              <p>Родителям</p>
              <li>
                <Link to="/Teacher">Обо мне</Link>
              </li>
            </ul>
            <ul>
              <p>Детям</p>
              <li>
                <Link to="/Table">Расписание</Link>
              </li>
              <li>
                <Link to="/Methodical">Методические указания</Link>
              </li>
            </ul>
            <ul>
              <p>Интересное</p>
              <li>
                <Link to="/Blog">Блог</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
