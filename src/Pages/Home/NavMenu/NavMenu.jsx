import "./Menunav.css";
import React, { useState } from "react";
import MegaMenu from "../MegaMenu";

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
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative nav-menu">
      <ul className="menu-list flex space-x-6">
        {Menu.map((item, index) => (
          <li key={index}>
            <button
              onMouseEnter={handleClick}
              onMouseLeave={() => {
                setIsOpen(false);
              }}
              className="menu-item hover:text-red-500"
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
      {isOpen && (
        <div className="absolute left-36 top-full w-full">
          <MegaMenu />
        </div>
      )}
    </div>
  );
};

export default NavMenu;
