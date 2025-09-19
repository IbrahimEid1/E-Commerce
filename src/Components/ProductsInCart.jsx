import { useContext } from "react";
import { CartContext } from "../context/ContextCart";

const CartMenu = () => {
  const { cartCount } = useContext(CartContext);
  return (
    <div className="relative inline-block text-left z-100">
      <div className="origin-top-right absolute -left-60 top-5 mt-3 w-80 rounded-lg bg-white shadow-xl ring-1 ring-black ring-opacity-5">
        <div className="absolute -top-4 right-6 w-4 h-4 bg-white transform rotate-45 shadow-sm"></div>

        <div className="p-4">
          <div className="flex flex-col divide-y divide-gray-200">
            {cartCount.map((item) => (
              <div key={item.id} className="py-3 flex gap-3 items-center">
                <div className="w-12 h-12 rounded-md flex-shrink-0 bg-gradient-to-br from-pink-300 to-pink-500 shadow-inner"></div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-gray-800">
                    {item.ModalTitle}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{item.price}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex gap-3">
            <button className="flex-1 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700">
              View Bag
            </button>
            <button className="flex-1 py-2 rounded-md border border-gray-300 text-gray-800 font-medium hover:bg-gray-50">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartMenu;
