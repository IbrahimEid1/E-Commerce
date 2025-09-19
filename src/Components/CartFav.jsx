import { useContext } from "react";
import { CartContext } from "../context/ContextCart";

const CartFav = () => {
  const { CountFav, IsOpenedFav } = useContext(CartContext);

  if (!IsOpenedFav) return null;

  return (
    <div className="relative inline-block text-left z-50">
      <div className="origin-top-right absolute -left-60 top-8  mt-3 w-80 rounded-lg bg-white shadow-xl ring-1 ring-black ring-opacity-5">
        <div className="p-4">
          <div className="flex flex-col divide-y divide-gray-200">
            {CountFav.length === 0 ? (
              <div className="text-center text-gray-500 py-4">
                No favorites yet
              </div>
            ) : (
              CountFav.map((item, index) => (
                <div key={index} className="py-3 flex gap-3 items-center">
                  <div
                    className="w-12 h-12 rounded-md flex-shrink-0  shadow-inner"
                    style={item.bgColor}
                  ></div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-gray-800">
                      {item.title}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      {item.price}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          {CountFav.length ? (
            <>
              {" "}
              <div className="mt-4 flex gap-3">
                <button className="flex-1 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700">
                  View Bag
                </button>
                <button className="flex-1 py-2 rounded-md border border-gray-300 text-gray-800 font-medium hover:bg-gray-50">
                  Checkout
                </button>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default CartFav;
