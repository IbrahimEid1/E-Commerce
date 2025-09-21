import React, { memo } from "react";
import Inputs from "../../UI/Inputs";

const Aside = () => {
  return (
    <div className="flex w-[100%] h-[80%]">
      <aside className="w-[100%] mt-10 bg-white p-5 rounded-lg shadow-lg text-sm  h-full overflow-y-auto flex flex-col gap-5">
        <div className="flex items-center mb-5">
          <span className="mr-2 text-base">☰</span>
          <span>All Categories</span>
        </div>

        <div className="mb-6">
          <div className="font-bold mb-3 text-gray-800">BRAND</div>
          <div className="bg-purple-500 text-white px-2 py-1 rounded text-xs inline-block">
            <Inputs></Inputs>
          </div>
        </div>

        <div className="mb-6">
          <div className="font-bold mb-3 text-gray-800">MODEL</div>
          <ul className="space-y-2">
            <li className="flex justify-between items-center text-gray-600">
              <label className="flex items-center cursor-pointer flex-1">
                <input type="checkbox" className="mr-2" />
                Short
              </label>
              <span className="text-gray-400 text-xs">(5)</span>
            </li>
            <li className="flex justify-between items-center text-gray-600">
              <label className="flex items-center cursor-pointer flex-1">
                <input type="checkbox" className="mr-2" />
                Mid-length
              </label>
              <span className="text-gray-400 text-xs">(3)</span>
            </li>
            <li className="flex justify-between items-center text-gray-600">
              <label className="flex items-center cursor-pointer flex-1">
                <input type="checkbox" className="mr-2" />
                Sweater
              </label>
              <span className="text-gray-400 text-xs">(6)</span>
            </li>
            <li className="flex justify-between items-center text-gray-600">
              <label className="flex items-center cursor-pointer flex-1">
                <input type="checkbox" className="mr-2" />
                Party Dresses
              </label>
              <span className="text-gray-400 text-xs">(8)</span>
            </li>
            <li className="flex justify-between items-center text-gray-600">
              <label className="flex items-center cursor-pointer flex-1">
                <input type="checkbox" className="mr-2" />
                Regular Fit
              </label>
              <span className="text-gray-400 text-xs">(12)</span>
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="font-bold mb-3 text-gray-800">STYLE</div>
          <ul className="space-y-2">
            <li className="text-gray-600">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="mr-2" defaultChecked />
                Casual
              </label>
            </li>
            <li className="text-gray-600">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="mr-2" />
                Business Casual
              </label>
            </li>
            <li className="text-gray-600">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="mr-2" defaultChecked />
                Bohemian
              </label>
            </li>
            <li className="text-gray-600">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="mr-2" defaultChecked />
                Minimalist
              </label>
            </li>
            <li className="text-gray-600">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="mr-2" defaultChecked />
                Chic
              </label>
            </li>
            <li className="text-gray-600">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="mr-2" defaultChecked />
                Zara
              </label>
            </li>
            <li className="text-gray-600">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="mr-2" defaultChecked />
                Gucci
              </label>
            </li>
            <li className="text-gray-600">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="mr-2" defaultChecked />
                Mango
              </label>
            </li>
            <li className="text-gray-600">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="mr-2" />
                Ralph Lauren
              </label>
            </li>
            <li className="text-gray-600">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="mr-2" />
                Calvin Klein
              </label>
            </li>
            <li className="text-gray-600">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="mr-2" />
                Super Pink
              </label>
            </li>
          </ul>
        </div>

        {/* Color Section */}
        <div className="mb-6">
          <div className="font-bold mb-3 text-gray-800">COLOR</div>
          <div className="flex flex-wrap gap-2">
            <div className="w-5 h-5 rounded-full cursor-pointer border-2 bg-blue-500 border-gray-800"></div>
            <div className="w-5 h-5 rounded-full cursor-pointer border-2 bg-red-500 border-transparent"></div>
            <div className="w-5 h-5 rounded-full cursor-pointer border-2 bg-green-500 border-transparent"></div>
            <div className="w-5 h-5 rounded-full cursor-pointer border-2 bg-orange-400 border-transparent"></div>
            <div className="w-5 h-5 rounded-full cursor-pointer border-2 bg-yellow-400 border-transparent"></div>
            <div className="w-5 h-5 rounded-full cursor-pointer border-2 bg-purple-500 border-transparent"></div>
            <div className="w-5 h-5 rounded-full cursor-pointer border-2 bg-pink-500 border-transparent"></div>
            <div className="w-5 h-5 rounded-full cursor-pointer border-2 bg-amber-800 border-transparent"></div>
            <div className="w-5 h-5 rounded-full cursor-pointer border-2 bg-gray-800 border-transparent"></div>
            <div className="w-5 h-5 rounded-full cursor-pointer border-2 bg-gray-400 border-transparent"></div>
            <div className="w-5 h-5 rounded-full cursor-pointer border-2 bg-gray-100 border-gray-300"></div>
          </div>
        </div>

        <div className="mb-6">
          <div className="font-bold mb-3 text-gray-800">SIZE</div>
          <div className="flex flex-wrap gap-2">
            <div className="px-3 py-2 border rounded cursor-pointer text-xs bg-white border-gray-300">
              2XS
            </div>
            <div className="px-3 py-2 border rounded cursor-pointer text-xs bg-white border-gray-300">
              XS
            </div>
            <div className="px-3 py-2 border rounded cursor-pointer text-xs bg-blue-500 text-white border-blue-500">
              S
            </div>
            <div className="px-3 py-2 border rounded cursor-pointer text-xs bg-white border-gray-300">
              M
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            <div className="px-3 py-2 border rounded cursor-pointer text-xs bg-white border-gray-300">
              L
            </div>
            <div className="px-3 py-2 border rounded cursor-pointer text-xs bg-white border-gray-300">
              XL
            </div>
            <div className="px-3 py-2 border rounded cursor-pointer text-xs bg-white border-gray-300">
              2XL
            </div>
            <div className="px-3 py-2 border rounded cursor-pointer text-xs bg-white border-gray-300">
              3XL
            </div>
          </div>
        </div>

        <div className="mb-6">
          <div className="font-bold mb-3 text-gray-800">PRICE</div>
          <div className="flex gap-1 mb-3">
            <input
              type="text"
              className="border border-gray-300 rounded text-xs w-20"
              defaultValue="$ 60"
            />
            <input
              type="text"
              className="border border-gray-300 rounded text-xs w-20"
              defaultValue="$ 450"
            />
          </div>
          <div className="relative h-1.5 bg-gray-200 rounded mb-2">
            <div className="absolute h-full bg-blue-500 rounded left-[20%] right-[30%]"></div>
          </div>
          <div className="flex justify-between text-xs text-gray-400 mb-3">
            <span>Minimum: $0</span>
            <span>Maximum: $500</span>
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" defaultChecked />
            <span>Free Shipping</span>
          </div>
        </div>
      </aside>
    </div>
  );
};
export default memo(Aside);
