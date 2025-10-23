import React, { memo, useContext, useState } from "react";
import Inputs from "../../UI/Inputs";
import { CartContext } from "../../context/ContextCart";

const Aside = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setSearchQuery, searchQuery, selectedCategories, setSelectedCategories, Products, setSortType } =
    useContext(CartContext);

  const toggleAside = () => {
    setIsOpen((prev) => !prev);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const categories = ["Casual", "Zara", "Electronic", "Rachel Pally", "Bag", "Ralph lauren", "NBB"];

  return (
    <>
      <button
        onClick={toggleAside}
        className="md:hidden fixed top-4 left-4 z-50 bg-blue-500 text-white p-3 rounded-full shadow-lg"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
          />
        </svg>
      </button>

      {/* 🔹 خلفية شفافه عند فتح القائمة */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleAside}
        ></div>
      )}

      <div className="flex w-full h-[95%]">
        <aside
          className={`
            ${isOpen ? "translate-x-0" : "-translate-x-full"} 
            md:translate-x-0 
            fixed md:relative 
            left-0 top-0 
            w-[280px] md:w-full 
            h-full 
            bg-white 
            p-3 md:p-5 
            rounded-none md:rounded-lg 
            text-xs md:text-sm 
            overflow-y-auto 
            flex flex-col 
            gap-4 md:gap-5
            transition-transform duration-300 ease-in-out
            z-50 md:z-auto
            pt-16 md:pt-0
          `}
        >
          {/* 🔹 زر الإغلاق في الموبايل */}
          <button
            onClick={toggleAside}
            className="md:hidden absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* 🔹 العنوان */}
          <div className="flex items-center mb-3 md:mb-5">
            <span className="mr-2 text-sm md:text-base">☰</span>
            <span className="text-sm md:text-base font-semibold text-gray-700">All Categories</span>
          </div>

          {/* 🔹 البحث باسم المنتج */}
          <div className="mb-4 md:mb-6">
            <input
              type="text"
              placeholder="Filter by name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border border-gray-300 rounded text-xs w-full p-2"
            />
          </div>

          {/* 🔹 الفلترة بالأنواع (Checkbox) */}
          <div className="mb-4 md:mb-6">
            <div className="font-bold mb-2 md:mb-3 text-gray-800 text-xs md:text-sm">
              STYLE
            </div>
            <ul className="space-y-1 md:space-y-2">
              {categories.map((category) => (
                <li key={category} className="text-gray-600">
                  <label className="flex items-center cursor-pointer text-xs md:text-sm">
                    <input
                      type="checkbox"
                      className="mr-1 md:mr-2 w-3 h-3 md:w-4 md:h-4"
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                    />
                    {category}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* 🔹 الفلترة بالسعر */}
          <div className="mb-4 md:mb-6">
            <div className="font-bold mb-2 md:mb-3 text-gray-800 text-xs md:text-sm">
              PRICE
            </div>
            <div className="flex gap-1 mb-2 md:mb-3">
              <input
                type="text"
                className="border border-gray-300 rounded text-xs w-16 md:w-20 p-1"
                placeholder="$ Min"
                onChange={(e) => setSortType(e.target.value)}
              />
              <input
                type="text"
                className="border border-gray-300 rounded text-xs w-16 md:w-20 p-1"
                placeholder="$ Max"
                onChange={(e) => setSortType(e.target.value)}
              />
            </div>
            <div className="relative h-1 md:h-1.5 bg-gray-200 rounded mb-2">
              <div className="absolute h-full bg-blue-500 rounded left-[20%] right-[30%]"></div>
            </div>
            <div className="flex justify-between text-xs text-gray-400 mb-2 md:mb-3">
              <span>Minimum: $0</span>
              <span>Maximum: $500</span>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                className="mr-1 md:mr-2 w-3 h-3 md:w-4 md:h-4"
                defaultChecked
              />
              <span className="text-xs md:text-sm">Free Shipping</span>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default memo(Aside);
