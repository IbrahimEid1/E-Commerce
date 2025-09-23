import React, { memo, useState } from "react";
import Inputs from "../../UI/Inputs";

const AsideIphone = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAside = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Filter Button for Mobile */}
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

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleAside}
        ></div>
      )}

      <div className="flex w-[100%] h-[80%]">
        <aside
          className={`
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 
          fixed md:relative 
          left-0 top-0 
          w-[280px] md:w-[100%] 
          h-full 
          mt-0 md:mt-10 
          bg-white 
          p-3 md:p-5 
          rounded-none md:rounded-lg 
          shadow-none md:shadow-lg 
          text-xs md:text-sm 
          overflow-y-auto 
          flex flex-col 
          gap-3 md:gap-5
          transition-transform duration-300 ease-in-out
          z-50 md:z-auto
          pt-16 md:pt-0
        `}
        >
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

          <div className="flex items-center mb-3 md:mb-5">
            <span className="mr-2 text-sm md:text-base">☰</span>
            <span className="text-sm md:text-base">All Categories</span>
          </div>

          <div className="mb-4 md:mb-6">
            <div className="font-bold mb-2 md:mb-3 text-gray-800 text-xs md:text-sm">
              BRAND
            </div>
            <div className="bg-purple-500 text-white px-2 py-1 rounded text-xs inline-block">
              <Inputs></Inputs>
            </div>
          </div>

          <div className="mb-4 md:mb-6">
            <div className="font-bold mb-2 md:mb-3 text-gray-800 text-xs md:text-sm">
              MODEL
            </div>
            <ul className="space-y-1 md:space-y-2">
              <li className="flex justify-between items-center text-gray-600">
                <label className="flex items-center cursor-pointer flex-1 text-xs md:text-sm">
                  <input
                    type="checkbox"
                    className="mr-1 md:mr-2 w-3 h-3 md:w-4 md:h-4"
                  />
                  Short
                </label>
                <span className="text-gray-400 text-xs">(5)</span>
              </li>
              <li className="flex justify-between items-center text-gray-600">
                <label className="flex items-center cursor-pointer flex-1 text-xs md:text-sm">
                  <input
                    type="checkbox"
                    className="mr-1 md:mr-2 w-3 h-3 md:w-4 md:h-4"
                  />
                  Mid-length
                </label>
                <span className="text-gray-400 text-xs">(3)</span>
              </li>
              <li className="flex justify-between items-center text-gray-600">
                <label className="flex items-center cursor-pointer flex-1 text-xs md:text-sm">
                  <input
                    type="checkbox"
                    className="mr-1 md:mr-2 w-3 h-3 md:w-4 md:h-4"
                  />
                  Sweater
                </label>
                <span className="text-gray-400 text-xs">(6)</span>
              </li>
              <li className="flex justify-between items-center text-gray-600">
                <label className="flex items-center cursor-pointer flex-1 text-xs md:text-sm">
                  <input
                    type="checkbox"
                    className="mr-1 md:mr-2 w-3 h-3 md:w-4 md:h-4"
                  />
                  Party Dresses
                </label>
                <span className="text-gray-400 text-xs">(8)</span>
              </li>
              <li className="flex justify-between items-center text-gray-600">
                <label className="flex items-center cursor-pointer flex-1 text-xs md:text-sm">
                  <input
                    type="checkbox"
                    className="mr-1 md:mr-2 w-3 h-3 md:w-4 md:h-4"
                  />
                  Regular Fit
                </label>
                <span className="text-gray-400 text-xs">(12)</span>
              </li>
            </ul>
          </div>

          <div className="mb-4 md:mb-6">
            <div className="font-bold mb-2 md:mb-3 text-gray-800 text-xs md:text-sm">
              STYLE
            </div>
            <ul className="space-y-1 md:space-y-2">
              <li className="text-gray-600">
                <label className="flex items-center cursor-pointer text-xs md:text-sm">
                  <input
                    type="checkbox"
                    className="mr-1 md:mr-2 w-3 h-3 md:w-4 md:h-4"
                    defaultChecked
                  />
                  Casual
                </label>
              </li>
              <li className="text-gray-600">
                <label className="flex items-center cursor-pointer text-xs md:text-sm">
                  <input
                    type="checkbox"
                    className="mr-1 md:mr-2 w-3 h-3 md:w-4 md:h-4"
                  />
                  Business Casual
                </label>
              </li>
              <li className="text-gray-600">
                <label className="flex items-center cursor-pointer text-xs md:text-sm">
                  <input
                    type="checkbox"
                    className="mr-1 md:mr-2 w-3 h-3 md:w-4 md:h-4"
                    defaultChecked
                  />
                  Bohemian
                </label>
              </li>
              <li className="text-gray-600">
                <label className="flex items-center cursor-pointer text-xs md:text-sm">
                  <input
                    type="checkbox"
                    className="mr-1 md:mr-2 w-3 h-3 md:w-4 md:h-4"
                    defaultChecked
                  />
                  Minimalist
                </label>
              </li>
              <li className="text-gray-600">
                <label className="flex items-center cursor-pointer text-xs md:text-sm">
                  <input
                    type="checkbox"
                    className="mr-1 md:mr-2 w-3 h-3 md:w-4 md:h-4"
                    defaultChecked
                  />
                  Chic
                </label>
              </li>
              <li className="text-gray-600">
                <label className="flex items-center cursor-pointer text-xs md:text-sm">
                  <input
                    type="checkbox"
                    className="mr-1 md:mr-2 w-3 h-3 md:w-4 md:h-4"
                    defaultChecked
                  />
                  Zara
                </label>
              </li>
              <li className="text-gray-600">
                <label className="flex items-center cursor-pointer text-xs md:text-sm">
                  <input
                    type="checkbox"
                    className="mr-1 md:mr-2 w-3 h-3 md:w-4 md:h-4"
                    defaultChecked
                  />
                  Gucci
                </label>
              </li>
              <li className="text-gray-600">
                <label className="flex items-center cursor-pointer text-xs md:text-sm">
                  <input
                    type="checkbox"
                    className="mr-1 md:mr-2 w-3 h-3 md:w-4 md:h-4"
                    defaultChecked
                  />
                  Mango
                </label>
              </li>
              <li className="text-gray-600">
                <label className="flex items-center cursor-pointer text-xs md:text-sm">
                  <input
                    type="checkbox"
                    className="mr-1 md:mr-2 w-3 h-3 md:w-4 md:h-4"
                  />
                  Ralph Lauren
                </label>
              </li>
              <li className="text-gray-600">
                <label className="flex items-center cursor-pointer text-xs md:text-sm">
                  <input
                    type="checkbox"
                    className="mr-1 md:mr-2 w-3 h-3 md:w-4 md:h-4"
                  />
                  Calvin Klein
                </label>
              </li>
              <li className="text-gray-600">
                <label className="flex items-center cursor-pointer text-xs md:text-sm">
                  <input
                    type="checkbox"
                    className="mr-1 md:mr-2 w-3 h-3 md:w-4 md:h-4"
                  />
                  Super Pink
                </label>
              </li>
            </ul>
          </div>

          <div className="mb-4 md:mb-6">
            <div className="font-bold mb-2 md:mb-3 text-gray-800 text-xs md:text-sm">
              COLOR
            </div>
            <div className="flex flex-wrap gap-1 md:gap-2">
              <div className="w-4 h-4 md:w-5 md:h-5 rounded-full cursor-pointer border-2 bg-blue-500 border-gray-800"></div>
              <div className="w-4 h-4 md:w-5 md:h-5 rounded-full cursor-pointer border-2 bg-red-500 border-transparent"></div>
              <div className="w-4 h-4 md:w-5 md:h-5 rounded-full cursor-pointer border-2 bg-green-500 border-transparent"></div>
              <div className="w-4 h-4 md:w-5 md:h-5 rounded-full cursor-pointer border-2 bg-orange-400 border-transparent"></div>
              <div className="w-4 h-4 md:w-5 md:h-5 rounded-full cursor-pointer border-2 bg-yellow-400 border-transparent"></div>
              <div className="w-4 h-4 md:w-5 md:h-5 rounded-full cursor-pointer border-2 bg-purple-500 border-transparent"></div>
              <div className="w-4 h-4 md:w-5 md:h-5 rounded-full cursor-pointer border-2 bg-pink-500 border-transparent"></div>
              <div className="w-4 h-4 md:w-5 md:h-5 rounded-full cursor-pointer border-2 bg-amber-800 border-transparent"></div>
              <div className="w-4 h-4 md:w-5 md:h-5 rounded-full cursor-pointer border-2 bg-gray-800 border-transparent"></div>
              <div className="w-4 h-4 md:w-5 md:h-5 rounded-full cursor-pointer border-2 bg-gray-400 border-transparent"></div>
              <div className="w-4 h-4 md:w-5 md:h-5 rounded-full cursor-pointer border-2 bg-gray-100 border-gray-300"></div>
            </div>
          </div>

          <div className="mb-4 md:mb-6">
            <div className="font-bold mb-2 md:mb-3 text-gray-800 text-xs md:text-sm">
              SIZE
            </div>
            <div className="flex flex-wrap gap-1 md:gap-2">
              <div className="px-2 py-1 md:px-3 md:py-2 border rounded cursor-pointer text-xs bg-white border-gray-300">
                2XS
              </div>
              <div className="px-2 py-1 md:px-3 md:py-2 border rounded cursor-pointer text-xs bg-white border-gray-300">
                XS
              </div>
              <div className="px-2 py-1 md:px-3 md:py-2 border rounded cursor-pointer text-xs bg-blue-500 text-white border-blue-500">
                S
              </div>
              <div className="px-2 py-1 md:px-3 md:py-2 border rounded cursor-pointer text-xs bg-white border-gray-300">
                M
              </div>
            </div>
            <div className="flex flex-wrap gap-1 md:gap-2 mt-1 md:mt-2">
              <div className="px-2 py-1 md:px-3 md:py-2 border rounded cursor-pointer text-xs bg-white border-gray-300">
                L
              </div>
              <div className="px-2 py-1 md:px-3 md:py-2 border rounded cursor-pointer text-xs bg-white border-gray-300">
                XL
              </div>
              <div className="px-2 py-1 md:px-3 md:py-2 border rounded cursor-pointer text-xs bg-white border-gray-300">
                2XL
              </div>
              <div className="px-2 py-1 md:px-3 md:py-2 border rounded cursor-pointer text-xs bg-white border-gray-300">
                3XL
              </div>
            </div>
          </div>

          <div className="mb-4 md:mb-6">
            <div className="font-bold mb-2 md:mb-3 text-gray-800 text-xs md:text-sm">
              PRICE
            </div>
            <div className="flex gap-1 mb-2 md:mb-3">
              <input
                type="text"
                className="border border-gray-300 rounded text-xs w-16 md:w-20 p-1"
                defaultValue="$ 60"
              />
              <input
                type="text"
                className="border border-gray-300 rounded text-xs w-16 md:w-20 p-1"
                defaultValue="$ 450"
              />
            </div>
            <div className="relative h-1 md:h-1.5 bg-gray-200 rounded mb-1 md:mb-2">
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
export default memo(AsideIphone);
