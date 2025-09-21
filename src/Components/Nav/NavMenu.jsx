import "./Menunav.css";
import MegaMenu from "./MegaMenu";
import { memo } from "react";

const NavMenu = () => {
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

  return (
    <section className="nav-menu responsive-navmenu">
      <div className="menu-container">
        <ul className="menu-list">
          {Menu.map((item, index) => (
            <li key={index} className="menu-list-item has-mega">
              <button className="menu-item">{item}</button>

              <div className="mega-menu-container">
                <div className="mega-menu-wrapper">
                  <MegaMenu activeCategory={item} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default memo(NavMenu);
