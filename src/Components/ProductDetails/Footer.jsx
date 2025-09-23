import React from "react";
import FooterVisa from "./FooterVisa";

const Footer = () => {
  return (
    <footer className="bg-blue-100 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-700">
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Our Store</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Career Opportunities</h3>
            <ul className="space-y-2">
              <li>
                <a href="#">Selling Programs</a>
              </li>
              <li>
                <a href="#">Advertise</a>
              </li>
              <li>
                <a href="#">Cooperation</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">How to Buy</h3>
            <ul className="space-y-2">
              <li>
                <a href="#">Making Payments</a>
              </li>
              <li>
                <a href="#">Delivery Options</a>
              </li>
              <li>
                <a href="#">Buyer Protection</a>
              </li>
              <li>
                <a href="#">New User Guide</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Help</h3>
            <ul className="space-y-2">
              <li>
                <a href="#">Contacts Us</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
