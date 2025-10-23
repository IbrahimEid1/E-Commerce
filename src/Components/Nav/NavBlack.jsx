import React, { memo, useContext, useState } from "react";
import { ChevronDown, ShoppingCart, Heart, User, Menu } from "lucide-react";
import { CartContext } from "../../context/ContextCart";
import DropdownUser from "../AddNewProduct/DropdownUser";
import { useNavigate } from "react-router-dom";
import CartFav from "../CartFav";
import CartMenu from "../ProductsInCart";

const NavBlack = () => {
  const navigate = useNavigate();

  // -------------------------------
  // ✅ الحالات (States)
  // -------------------------------
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isFavOpen, setIsFavOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // بيانات المستخدم
  const LogData = JSON.parse(localStorage.getItem("token"));
  const userEmail = LogData?.user?.email || "Login";
  const isLoggedIn = !!LogData?.jwt;

  // -------------------------------
  // ✅ الدوال (Handlers)
  // -------------------------------

  const handleProfileToggle = () => {
    if (isLoggedIn) {
      setIsProfileOpen((prev) => !prev);
      setIsFavOpen(false);
      setIsCartOpen(false);
    } else {
      navigate("/login");
    }
  };

  const handleFavToggle = () => {
    setIsFavOpen((prev) => !prev);
    setIsCartOpen(false);
    setIsProfileOpen(false);
    console.log(isFavOpen);
    
  };

  const handleCartToggle = () => {
    setIsCartOpen((prev) => !prev);
    setIsFavOpen(false);
    setIsProfileOpen(false);
  };

  // -------------------------------
  // ✅ واجهة العرض (UI)
  // -------------------------------

  return (
    <div className="bg-gray-800 shadow-md sticky top-0 z-50 hidden md:block border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">

        {/* ---------------- Left: اللغة والتصنيفات ---------------- */}
        <div className="flex items-center space-x-6 text-sm text-gray-300">
          <div className="flex items-center space-x-2 cursor-pointer hover:text-white transition-colors">
            <Menu className="w-4 h-4" />
            <span className="font-medium">Categories</span>
          </div>

          <span className="text-gray-600">|</span>

          <div className="flex items-center space-x-4">
            <span className="hover:text-white cursor-pointer transition-colors">USD</span>
            <span className="hover:text-white cursor-pointer transition-colors flex items-center space-x-1">
              English <ChevronDown className="w-3 h-3 ml-1" />
            </span>
          </div>
        </div>

        {/* ---------------- Center: النص الترويجي ---------------- */}
        <div className="flex items-center space-x-3">
          <p className="text-xs font-medium text-green-400">
            Weekly Men's Toiletries Coupons.
          </p>
        </div>

        {/* ---------------- Right: عناصر المستخدم ---------------- */}
        <div className="flex items-center space-x-6">
          <ul className="flex items-center space-x-6">

            {/* ---------------- User Dropdown ---------------- */}
            <li className="relative">
              <button
                onClick={handleProfileToggle}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <User className="w-5 h-5" />
                <span className="font-medium text-sm">{userEmail}</span>
              </button>

              {isProfileOpen && (
                <div className="absolute top-full right-0 mt-2 z-[9999]">
                  <DropdownUser />
                </div>
              )}
            </li>

            {/* ---------------- Favorites ---------------- */}
               <Heart  onClick={handleFavToggle} className="cursor-pointer  text-white z-50">
                {isFavOpen ? <CartFav /> : null}
              </Heart>

            {/* ---------------- Cart ---------------- */}
            <div className="z-50">
              <CartMenu />
            </div>


          </ul>
        </div>
      </div>
    </div>
  );
};

export default memo(NavBlack);
