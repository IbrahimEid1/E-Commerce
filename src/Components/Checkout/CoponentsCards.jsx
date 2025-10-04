import React, { useContext, useState } from "react";
import { CartContext } from "../../context/ContextCart";
import { Trash2 } from "lucide-react";

const ComponentsCards = () => {
  const { cartCount, removeItem } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  return (
    <>
      {cartCount.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-6 items-center border-b pb-3 gap-3"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-12 h-12 rounded"
          />

          <p className="font-medium truncate col-span-2">
            {item.title.slice(0, 20)}
          </p>

          <p className="text-center">${item.price}</p>

          <div className="flex items-center border rounded justify-between w-20">
            <button
              className="px-2"
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              −
            </button>
            <span>{item.quantity}</span>
            <button className="px-2" onClick={() => setQuantity(quantity + 1)}>
              +
            </button>
          </div>

          {/* Total + Delete */}
          <div className="flex items-center justify-between w-24">
            <p>${(item.price * item.quantity).toFixed(2)}</p>
            <button
              className="text-gray-500 hover:text-red-600"
              onClick={() => removeItem(item.id)}
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ComponentsCards;
