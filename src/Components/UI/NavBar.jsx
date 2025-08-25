import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
const storageKey = "loginToken";
  const storedToken = localStorage.getItem(storageKey);
  const userData = storedToken ? JSON.parse(storedToken) : null;
  const logOut =()=>{
    localStorage.removeItem("loginToken");  
    window.location.replace("/login");
  }
  
  return (
    <nav className="w-full bg-gray-900 text-white px-6 py-4 flex items-center justify-between shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold tracking-wide">MyApp</div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* Email Placeholder */}
        {userData && userData.user && (
          <button className="text-sm text-gray-300">{userData.user.email}</button>
        )}

        {/* Login / Logout Button */}
        <Link className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition" onClick={logOut}>
          {userData ? "Logout" : "Login"}
        </Link>
      </div>
    </nav>
  );
}
