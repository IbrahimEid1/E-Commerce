import React, { useState } from "react";
import { ChevronDown, Instagram, Facebook, Share } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [language, setLanguage] = useState("English");

  return (
    <div className="w-[100%] bg-gray-100 min-h-screen flex flex-col justify-center items-center p-2 sm:p-4">
      <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Newsletter Section */}
        <div className="container w-[100%] flex flex-row justify-center">
          <div
            className="text-white text-center py-4 sm:py-6 md:py-8 px-2 sm:px-4 w-[90%] sm:w-[70%] md:w-[50%] lg:w-[30%] rounded-md translate-y-12 sm:translate-y-16 md:translate-y-24"
            style={{ backgroundColor: "rgb(114,150,171,1)" }}
          >
            <h2 className="text-lg sm:text-xl font-semibold mb-2">
              Luminae Store
            </h2>
            <p className="text-xs sm:text-sm mb-4 opacity-90 px-1">
              Register your email not to miss the last minutes offer Free
              delivery
            </p>
            <div className="flex justify-center">
              <div className="relative w-full max-w-xs">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white text-gray-800 px-3 sm:px-4 py-2 pr-8 sm:pr-10 rounded border-0 outline-none text-xs sm:text-sm w-full"
                />
                <ChevronDown className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-gray-600 w-3 h-3 sm:w-4 sm:h-4" />
              </div>
            </div>
          </div>
        </div>
        {/* Footer Links Section */}
        <div className="bg-slate-200 py-6 sm:py-8 px-4 sm:px-8 min-h-[40vh] sm:h-[50vh] flex flex-col justify-evenly">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mx-4 sm:mx-8 md:mx-16 lg:mx-32">
            {/* Company Column */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-3 sm:mb-4 text-sm">
                Company
              </h3>
              <ul className="space-y-1 sm:space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-800 text-xs sm:text-sm"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-800 text-xs sm:text-sm"
                  >
                    Our Store
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-800 text-xs sm:text-sm"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Career Opportunities Column */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-3 sm:mb-4 text-sm">
                Career Opportunities
              </h3>
              <ul className="space-y-1 sm:space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-800 text-xs sm:text-sm"
                  >
                    Selling Programs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-800 text-xs sm:text-sm"
                  >
                    Advertise
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-800 text-xs sm:text-sm"
                  >
                    Cooperation
                  </a>
                </li>
              </ul>
            </div>

            {/* How to Buy Column */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-3 sm:mb-4 text-sm">
                How to Buy
              </h3>
              <ul className="space-y-1 sm:space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-800 text-xs sm:text-sm"
                  >
                    Making Payments
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-800 text-xs sm:text-sm"
                  >
                    Delivery Options
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-800 text-xs sm:text-sm"
                  >
                    Buyer Protection
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-800 text-xs sm:text-sm"
                  >
                    New User Guide
                  </a>
                </li>
              </ul>
            </div>

            {/* Help Column */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-3 sm:mb-4 text-sm">
                Help
              </h3>
              <ul className="space-y-1 sm:space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-800 text-xs sm:text-sm"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-800 text-xs sm:text-sm"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-800 text-xs sm:text-sm"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-white px-4 sm:px-8 py-4">
          {/* Payment Methods */}
          <div className="flex flex-col sm:flex-row items-center justify-between mb-4 space-y-3 sm:space-y-0">
            <div className="flex items-center space-x-3 sm:space-x-4 flex-wrap justify-center sm:justify-start">
              {/* Visa */}
              <div className="bg-blue-600 text-white px-2 sm:px-3 py-1 rounded text-xs font-bold">
                VISA
              </div>
              {/* Mastercard circles */}
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full opacity-80"></div>
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400 rounded-full opacity-80 -ml-2"></div>
              </div>
              {/* PayPal */}
              <div className="flex items-center">
                <span className="text-blue-600 font-bold text-xs sm:text-sm">
                  Pay
                </span>
                <span className="text-blue-800 font-bold text-xs sm:text-sm">
                  Pal
                </span>
              </div>
            </div>

            {/* Language */}
            <div className="flex items-center text-gray-600 text-xs sm:text-sm cursor-pointer">
              <span>{language}</span>
              <ChevronDown className="ml-1 w-2 h-2 sm:w-3 sm:h-3" />
            </div>
          </div>

          {/* Address and Social */}
          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 space-y-3 sm:space-y-0">
            <div className="text-center sm:text-left">
              <p className="text-xs">
                165-179 Forster Road City of Monash, Melbourne, Australia
              </p>
              <p className="mt-1 text-xs">
                ©2023 Copyright is reserved for luminae store
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-3">
              <Instagram className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 hover:text-gray-600 cursor-pointer" />
              <Facebook className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 hover:text-gray-600 cursor-pointer" />
              <Share className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 hover:text-gray-600 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
