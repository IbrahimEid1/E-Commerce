import { useState } from "react";
import { Heart } from "lucide-react";

const LikeButton = ({ onClick }) => {
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={() => setLiked(!liked)}
      className="p-2 rounded-full transition-colors duration-300"
    >
      <Heart
        onClick={onClick}
        size={25}
        className={`transition-colors duration-300 ${
          liked ? "fill-red-500 text-red-500" : "text-gray-500"
        }`}
      />
    </button>
  );
};

export default LikeButton;
