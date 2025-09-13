import { useState } from "react";
import { ShoppingCart, Menu, X, Instagram, Facebook } from "lucide-react";
import Logo from "../../assets/Logo.png";
import InputSearch from "../../UI/InputSearch";
import "../../Pages/Home/ParentNav.css";
import List from "./GROUPS/List";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="ChildNav">
        <div className="container-logo">
          <img src={Logo} alt="Logo" className="logo" />
          <h1>Luminae</h1>
        </div>
        <div className="container-input">
          <InputSearch />
        </div>
        <div className="container-links">
          <List />
        </div>
      </div>
      <div className="socail ">
        <Instagram />
        <Facebook />
        <X />
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <a
            href="/"
            className="block px-4 py-2 text-gray-700 hover:bg-indigo-100"
          >
            Home
          </a>
          <a
            href="/products"
            className="block px-4 py-2 text-gray-700 hover:bg-indigo-100"
          >
            Products
          </a>
          <a
            href="/about"
            className="block px-4 py-2 text-gray-700 hover:bg-indigo-100"
          >
            About
          </a>
          <a
            href="/contact"
            className="block px-4 py-2 text-gray-700 hover:bg-indigo-100"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
