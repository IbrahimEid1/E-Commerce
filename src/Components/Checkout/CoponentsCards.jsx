import React, { useContext, useState } from "react";
import { CartContext } from "../../context/ContextCart";
import { Trash2 } from "lucide-react";

const ComponentsCards = () => {
  const { cartCount, removeItem   } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      {cartCount.length ? (
        <>
          {cartCount.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 items-center border-b pb-3 gap-2 sm:gap-3 py-2"
            >
              {/* Image */}
              <img
                src={`${item.Image.url}` }
                alt={item.title}
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-12 md:h-auto rounded object-cover"
              />
              
              {/* Product Name */}
              <p className="font-medium truncate col-span-1 sm:col-span-2 md:col-span-2 text-sm sm:text-base">
                {item.name}
              </p>

              {/* Price */}
              <p className="text-center text-sm sm:text-base order-4 sm:order-none">${item.price}</p>

              {/* Quantity Controls */}
              <div className="flex items-center border rounded justify-between w-16 sm:w-20 text-sm sm:text-base order-5 sm:order-none">
                <button
                  className="px-1 sm:px-2 py-1"
                  onClick={() =>
                    setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
                  }
                >
                  −
                </button>
                <span>{item.quantity}</span>
                <button
                  className="px-1 sm:px-2 py-1"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>

              {/* Total + Delete */}
              <div className="flex items-center justify-between w-full sm:w-24 col-span-2 sm:col-span-1 order-last sm:order-none">
                <p className="font-semibold text-sm sm:text-base">${(item.price * item.quantity).toFixed(2)}</p>
                <button
                  className="text-gray-500 hover:text-red-600 transition-colors p-1"
                  onClick={() => removeItem(item.id)}
                >
                  <Trash2 size={18} className="sm:w-5 sm:h-5" />
                </button>
              </div>
                
            </div>
            
          ))}

        </>
      ) : (
        <p className="text-center text-gray-500 py-8 text-sm sm:text-base">Not Found Data In Cart</p>
      )}
    </>
  );
};

export default ComponentsCards;