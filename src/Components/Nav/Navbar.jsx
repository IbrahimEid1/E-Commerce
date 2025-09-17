import React, { useState, useEffect } from "react";
import {
  ShoppingCart,
  Menu,
  X as CloseIcon,
  Instagram,
  Facebook,
} from "lucide-react";
import Logo from "../../assets/Logo.png";
import InputSearch from "../../UI/InputSearch";
import "./ParentNav.css";
import List from "../GROUPS/List";

import Cutomize from "../../assets/Men cosmetic.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  const navBlackContent = {
    leftItems: ["Categories", "USD", "English"],
    promotion: {
      image: Cutomize,
      title: "Weekly Men's Toiletries Coupons.",
      description: "We extend exclusive discounts to our male clientele",
    },
    userActions: [],
  };
  const navMenuContent = [
    "Woman",
    "Male",
    "Mother-Child",
    "Home-Furniture",
    "SuperMarket",
    "Cosmetics",
    "Shoe & Bag",
    "Electronic",
    "Sport & Outdoor",
  ];

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="main-navbar">
      <div className="ChildNav">
        <div className="container-logo">
          <img src={Logo} alt="Logo" className="logo" />
          <h1>Luminae</h1>
        </div>

        {!isMobile && (
          <>
            <div className="container-input">
              <InputSearch />
            </div>
            <div className="container-links">
              <List />
            </div>
          </>
        )}

        {isMobile && (
          <button
            onClick={toggleMenu}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            {isOpen ? <CloseIcon size={24} /> : <Menu size={24} />}
          </button>
        )}
        {!isMobile && (
          <div className="socail">
            <Instagram />
            <Facebook />
            <CloseIcon />
          </div>
        )}
      </div>

      {isMobile && isOpen && (
        <div className="mobile-menu">
          <div className="mobile-navblack-section">
            <h3 className="section-title">Quick Access</h3>

            <div className="mobile-quick-items">
              {navBlackContent.leftItems.map((item, index) => (
                <button key={index} className="mobile-quick-item">
                  {item}
                </button>
              ))}
            </div>

            <div className="mobile-promotion"></div>
            <div className="mobile-user-actions">
              {navBlackContent.userActions.map((Action, index) => (
                <button key={index} className="mobile-user-action">
                  <Action.icon className="action-icon" />
                  <span>{Action.text}</span>
                  {Action.badge && (
                    <span className="action-badge">{Action.badge}</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="mobile-separator"></div>
          <div className="mobile-navmenu-section">
            <h3 className="section-title">Categories</h3>
            <div className="mobile-categories">
              {navMenuContent.map((category, index) => (
                <a key={index} href="#" className="mobile-category-link">
                  {category}
                </a>
              ))}
            </div>
          </div>

          <div className="mobile-search-section">
            <h3 className="section-title">Search</h3>
            <InputSearch />
          </div>

          <div className="mobile-nav-section">
            <h3 className="section-title">Navigation</h3>
            <List />
          </div>

          <div className="mobile-default-links">
            <a href="/" className="mobile-default-link">
              Home
            </a>
            <a href="/products" className="mobile-default-link">
              Products
            </a>
            <a href="/about" className="mobile-default-link">
              About
            </a>
            <a href="/contact" className="mobile-default-link">
              Contact
            </a>
          </div>

          <div className="mobile-social">
            <h3 className="section-title">Follow Us</h3>
            <div className="social-icons">
              <Instagram />
              <Facebook />
              <CloseIcon />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
