import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

const BurgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const ref = useRef();
  useEffect(() => {
    const handler = (e) => {
      if (menuOpen && ref.current && !ref.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [menuOpen]);

  return (
    <>
      <nav ref={ref} className="burger">
        <button
          className="burger__menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? (
            <MdClose style={{ width: "32px", height: "32px" }} />
          ) : (
            <FiMenu
              style={{
                width: "32px",
                height: "32px",
              }}
            />
          )}
        </button>

        <ul className={`menu-nav${menuOpen ? " show-menu" : ""}`}>
          <NavLink onClick={() => setMenuOpen(false)}>
            <li>
              <Link to="/Teacher">Главная</Link>
            </li>
            <li>
              <Link to="/Table">Расписание</Link>
            </li>
            <li>
              <Link to="/Methodical">Методические материалы</Link>
            </li>
            <li>
              <Link to="/Blog">Блог</Link>
            </li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default BurgerMenu;
