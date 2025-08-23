import React from "react";

export default function Button({ text, type = "submit", onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
    >
      {text}
    </button>
  );
}
