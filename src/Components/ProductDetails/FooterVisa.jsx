import React from "react";
import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";

const FooterVisa = () => {
  return (
    <div className="bg-white border-t">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <div className="flex items-center space-x-4">
            <img src="/visa.png" alt="Visa" className="h-6" />
            <img src="/mastercard.png" alt="Mastercard" className="h-6" />
            <img src="/paypal.png" alt="PayPal" className="h-6" />
          </div>

          <div className="mt-4 md:mt-0">
            <select className="border-none bg-transparent text-sm focus:ring-0 cursor-pointer">
              <option>English</option>
              <option>Arabic</option>
              <option>German</option>
            </select>
          </div>
        </div>

        <hr className="my-4" />

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <div>165-179 Forster Road City of Monash, Melbourne, Australia</div>

          <div className="mt-2 md:mt-0 text-center">
            ©2023 Copyright is reserved for lumine shop
          </div>

          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#">
              <FaInstagram className="text-lg hover:text-gray-700" />
            </a>
            <a href="#">
              <FaFacebookF className="text-lg hover:text-gray-700" />
            </a>
            <a href="#">
              <FaTelegramPlane className="text-lg hover:text-gray-700" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterVisa;
