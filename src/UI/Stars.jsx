import { useState } from "react";
import { Star } from "lucide-react";

const StarButton = () => {
  const [star, setStar] = useState(false);

  return (
    <button
      onClick={() => setStar(!star)}
      className="p-2 rounded-full transition-colors duration-300"
    >
      <Star
        size={15}
        className={`transition-colors duration-300 ${
          star ? "fill-yellow-500 text-yellow-500" : "text-gray-500"
        }`}
      />
    </button>
  );
};

export default StarButton;
