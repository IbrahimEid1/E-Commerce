import { useContext, memo, useState } from "react";
import { CartContext } from "../context/ContextCart";
import { Handbag, Trash, X } from "lucide-react";

const CartMenu = () => {
  const { cartCount, RemoveAll, removeItem } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <div
        className={`hidden md:block origin-top-right absolute -left-60 top-7 mt-3 w-80 rounded-lg bg-white shadow-xl ring-1 ring-black ring-opacity-5 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="p-4">
          <div className="flex flex-col divide-y divide-gray-200">
            {cartCount.length ? (
              cartCount.map((item, index) => (
                <div key={index} className="py-3 flex gap-3 items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 rounded-md flex-shrink-0 shadow-inner"
                  />
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-gray-800">
                      {item.title}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      ${item.price}
                    </div>
                  </div>
                  {/* Badge للكمية */}
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    {item.quantity}
                  </span>
                  <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                    <Trash
                      onClick={() => {
                        removeItem(item.id);
                      }}
                      width={15}
                    />
                  </span>
                </div>
              ))
            ) : (
              <div className="text-black flex flex-col justify-center items-center">
                <Handbag size={40} className="mb-3" />
                <p>No products in your basket.</p>
              </div>
            )}
          </div>

          <div className="mt-4 flex gap-3">
            {cartCount.length ? (
              <>
                <button
                  className="flex-1 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700"
                  onClick={() => {
                    RemoveAll("cart");
                  }}
                >
                  Remove All
                </button>
                <button className="flex-1 py-2 rounded-md border border-gray-300 text-gray-800 font-medium hover:bg-gray-50">
                  Checkout
                </button>
              </>
            ) : null}
          </div>
        </div>
      </div>

      {/* ===== Mobile Cart Drawer ===== */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          <div className="relative w-4/5 max-w-sm bg-white shadow-xl h-full ml-auto p-4 flex flex-col">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              <X size={24} />
            </button>

            <h2 className="text-lg font-bold mb-4">Your Cart</h2>

            <div className="flex-1 overflow-y-auto divide-y divide-gray-200">
              {cartCount.length ? (
                cartCount.map((item, index) => (
                  <div key={index} className="py-3 flex gap-3 items-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-12 h-12 rounded-md flex-shrink-0 shadow-inner"
                    />
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-gray-800">
                        {item.title}
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        ${item.price}
                      </div>
                    </div>
                    {/* Badge للكمية */}
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      x{item.quantity}
                    </span>
                  </div>
                ))
              ) : (
                <div className="flex flex-col justify-center items-center mt-10 text-gray-600">
                  <Handbag size={40} className="mb-3" />
                  <p>No products in your basket.</p>
                </div>
              )}
            </div>

            {cartCount.length ? (
              <div className="mt-4 flex gap-3">
                <button className="flex-1 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700">
                  Remove ALL Products
                </button>
                <button className="flex-1 py-2 rounded-md border border-gray-300 text-gray-800 font-medium hover:bg-gray-50">
                  Checkout
                </button>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(CartMenu);
