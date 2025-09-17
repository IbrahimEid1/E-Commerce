import "./Menunav.css";
import React, { useState } from "react";
import MegaMenu from "./MegaMenu";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const Menu = [
    "woman",
    "Male",
    "Mother-Child",
    "Home-Furniture",
    "SuperMarket",
    "Cosmetics",
    "Shoe & Bag",
    "Electronic",
    "Sport & Outdoor",
  ];

  const handleClick = (item) => {
    setActiveItem(item);
    setIsOpen((prev) => (activeItem === item ? !prev : true));
  };

  const handleMouseEnter = (item) => {
    setActiveItem(item);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
    setActiveItem(null);
  };

  return (
    <section className="relative nav-menu responsive-navmenu">
      <div className="menu-container">
        <ul className="menu-list">
          {Menu.map((item, index) => (
            <li key={index} className="menu-list-item">
              <button
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(item)}
                className={`menu-item ${activeItem === item ? "active" : ""}`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {isOpen && activeItem && (
        <div
          className="mega-menu-container"
          onMouseEnter={() => handleMouseEnter(activeItem)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="mega-menu-wrapper">
            <MegaMenu activeCategory={activeItem} />
          </div>
        </div>
      )}
    </section>
  );
};

export default NavMenu;
