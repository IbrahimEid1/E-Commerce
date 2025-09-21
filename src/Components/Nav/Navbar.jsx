import React, { useState, memo } from "react";
import {
  ShoppingCart,
  Menu,
  X as CloseIcon,
  Instagram,
  Facebook,
} from "lucide-react";
import Logo from "../../assets/Logo.png";
import InputSearch from "../../UI/InputSearch";
import List from "../GROUPS/List";
import Cutomize from "../../assets/Men cosmetic.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="w-full bg-white shadow-md overflow-hidden">
      <div className="flex items-center justify-between px-4 sm:px-8 py-3">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="w-10 h-10" />
          <h1 className="text-xl font-bold">Luminae</h1>
        </div>

        <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
          <InputSearch />
          <List />
        </div>

        <div className="hidden md:flex gap-4 text-gray-600">
          <Instagram />
          <Facebook />
          <ShoppingCart />
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-gray-700"
          aria-label="Toggle menu"
        >
          {isOpen ? <CloseIcon size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-50 border-t border-gray-200">
          <div className="px-4 py-3">
            <h3 className="font-semibold text-gray-700 mb-2">Quick Access</h3>
            <div className="flex flex-wrap gap-2">
              {navBlackContent.leftItems.map((item, index) => (
                <button
                  key={index}
                  className="px-3 py-1 bg-white border rounded-md text-sm text-gray-700"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="px-4 py-3">
            <h3 className="font-semibold text-gray-700 mb-2">Categories</h3>
            <div className="grid grid-cols-2 gap-2">
              {navMenuContent.map((category, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-600 hover:text-red-500 text-sm"
                >
                  {category}
                </a>
              ))}
            </div>
          </div>

          <div className="px-4 py-3">
            <h3 className="font-semibold text-gray-700 mb-2">Search</h3>
            <InputSearch />
          </div>

          <div className="px-4 py-3">
            <h3 className="font-semibold text-gray-700 mb-2">Navigation</h3>
            <List />
          </div>

          <div className="px-4 py-3 space-y-1">
            <a href="/" className="block text-gray-700">
              Home
            </a>
            <a href="/products" className="block text-gray-700">
              Products
            </a>
            <a href="/about" className="block text-gray-700">
              About
            </a>
            <a href="/contact" className="block text-gray-700">
              Contact
            </a>
          </div>

          <div className="px-4 py-3">
            <h3 className="font-semibold text-gray-700 mb-2">Follow Us</h3>
            <div className="flex gap-4 text-gray-600">
              <Instagram />
              <Facebook />
              <ShoppingCart />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default memo(Navbar);
