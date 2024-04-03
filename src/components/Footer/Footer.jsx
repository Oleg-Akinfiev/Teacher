import React from "react";

import "../styles/index.scss";

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
                <a href="#">Обо мне</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Детям</a>
              </li>
              <li>
                <a href="#">Расписание</a>
              </li>
              <li>
                <a href="#">Методические материалы</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Интересное</a>
              </li>
              <li>
                <a href="#">Блог</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
