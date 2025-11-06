import React, { useState, memo, useContext } from "react";
import {
  ShoppingCart,
  Menu,
  X,
  Instagram,
  Facebook,
  Twitter,
  ChevronRight,
  Search,
  Globe,
  DollarSign,
  User,
  LogIn,
  LogOut,
} from "lucide-react";
import Logo from "../../assets/Logo.png";
import InputSearch from "../../UI/InputSearch";
import List from "../GROUPS/List";
import Cutomize from "../../assets/Men cosmetic.png";
import { CartContext } from "../../context/ContextCart";
import CartMenu from "../ProductsInCart";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { setIsOpen: setCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

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
  const toggleCart = () => setIsCartOpen((prev) => !prev);

  const token = sessionStorage.getItem("token");
  const user = JSON.parse(sessionStorage.getItem("user"));
  const isLoggedIn = !!token;

  return (
    <nav className="w-full bg-white shadow-md overflow-hidden relative">
      <div className="flex items-center justify-between px-4 sm:px-8 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="w-10 h-10" />
          <h1 className="text-xl font-bold">Luminae</h1>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
          <List />
        </div>

        {/* Desktop Icons */}
        <div className="w-40 h-auto md:flex gap-4 text-gray-600">
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-3">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-blue-600 cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-pink-600 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Modern Mobile Menu with Slide Animation */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-gradient-to-r from-red-50 to-pink-50">
          <div className="flex items-center gap-2">
            <img src={Logo} alt="Logo" className="w-8 h-8" />
            <h2 className="text-lg font-bold text-gray-800">Luminae</h2>
          </div>
          <button
            onClick={toggleMenu}
            className="p-2 hover:bg-white rounded-full transition-colors"
            aria-label="Close menu"
          >
            <X size={20} className="text-gray-600" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="h-full overflow-y-auto pb-32">
          {/* Quick Settings */}
          <div className="px-5 py-4">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Quick Settings
            </h3>
            <div className="space-y-2">
              <button className="w-full flex items-center justify-between p-3 bg-white border border-gray-200 rounded-xl hover:border-red-300 transition-colors">
                <div className="flex items-center gap-3">
                  <DollarSign className="w-4 h-4 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">USD</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </button>
              <button className="w-full flex items-center justify-between p-3 bg-white border border-gray-200 rounded-xl hover:border-red-300 transition-colors">
                <div className="flex items-center gap-3">
                  <Globe className="w-4 h-4 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">English</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Categories */}
          <div className="px-5 py-4 border-t border-gray-100">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Categories
            </h3>
            <div className="space-y-1">
              {navMenuContent.map((category, index) => (
                <a
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-red-50 transition-colors group"
                  onClick={() => navigate("/allproduct")}
                >
                  <span className="text-sm font-medium text-gray-700 group-hover:text-red-600">
                    {category}
                  </span>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-red-600 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Account Section */}
          <div className="px-5 py-4 border-t border-gray-100">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Account
            </h3>
            <div className="space-y-2">
              {isLoggedIn ? (
                <>
                  <button
                    onClick={() => navigate("/profile")}
                    className="w-full flex items-center justify-between p-3 bg-white border border-gray-200 rounded-xl hover:border-red-300 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <User className="w-4 h-4 text-gray-600" />
                      <span className="text-sm font-medium text-gray-700">
                        {user?.email || "Profile"}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </button>
                  <button
                    onClick={() => {
                      sessionStorage.clear();
                      navigate("/login");
                    }}
                    className="w-full flex items-center justify-between p-3 bg-white border border-gray-200 rounded-xl hover:border-red-300 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <LogOut className="w-4 h-4 text-gray-600" />
                      <span className="text-sm font-medium text-gray-700">
                        Logout
                      </span>
                    </div>
                  </button>
                </>
              ) : (
                <button
                  onClick={() => navigate("/login")}
                  className="w-full flex items-center justify-between p-3 bg-white border border-gray-200 rounded-xl hover:border-red-300 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <LogIn className="w-4 h-4 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">
                      Login
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </button>
              )}
            </div>
          </div>

          {/* Cart Section */}
          <div className="px-5 py-4 border-t border-gray-100">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Cart
            </h3>
            <div
              onClick={toggleCart}
              className="w-full flex items-center justify-between p-3 bg-white border border-gray-200 rounded-xl hover:border-red-300 cursor-pointer transition-colors"
            >
              <div className="flex items-center gap-3">
                <ShoppingCart className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">
                  View Cart
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </div>
            {isCartOpen && (
              <div className="mt-3 border border-gray-100 rounded-lg p-2 shadow-sm">
                <CartMenu />
              </div>
            )}
          </div>

          {/* Social Media */}
          <div className="px-5 py-4 border-t border-gray-100">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Follow Us
            </h3>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 hover:bg-blue-100 transition-colors"
              >
                <Facebook className="w-5 h-5 text-blue-600" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-sky-50 hover:bg-sky-100 transition-colors"
              >
                <Twitter className="w-5 h-5 text-sky-500" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-pink-50 hover:bg-pink-100 transition-colors"
              >
                <Instagram className="w-5 h-5 text-pink-600" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300"
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
};

export default memo(Navbar);
