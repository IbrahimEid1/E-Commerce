import { useState } from "react";
import { Search } from "lucide-react";

const InputSearch = () => {
  const [category, setCategory] = useState("All categories");

  const categories = [
    "All categories",
    "Electronics",
    "Fashion",
    "Books",
    "Toys",
  ];

  return (
    <div className="flex items-center border rounded-lg overflow-hidden w-full max-w-lg bg-white shadow-sm">
      <input
        type="text"
        placeholder="Search Products"
        className="px-4 py-2 w-full focus:outline-none"
      />

      <div className="h-6 w-px bg-gray-300 text-sm"></div>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="px-3 py-2 bg-transparent text-gray-600 focus:outline-none text-sm"
      >
        {categories.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <div className="h-6 w-px bg-gray-300 text-sm"></div>

      <button className="px-3 text-gray-600 hover:text-indigo-600 text-sm">
        <Search className="w-5 h-5" />
      </button>
    </div>
  );
};
export default InputSearch;
