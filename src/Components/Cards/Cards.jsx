import { Link } from "react-router-dom";
import { ProductCardHome } from "../ProductDetails/Products";
import { memo, useContext } from "react";
import { CartContext } from "../../context/ContextCart";
import { Toaster } from "react-hot-toast";
const Cards = () => {
  const { AddToCart } = useContext(CartContext);
  return (
    <div className="ParentCards w-full min-h-screen bg-gray-50 py-12 px-4 sm:px-6 flex flex-col">
      <div className="TitleParent w-full max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 sm:mb-14 gap-4">
        <span className="text-2xl sm:text-3xl font-medium text-gray-900">
          Flash Sales
        </span>
        <Link
          to="Allproduct"
          className="text-red-600 font-semibold text-base sm:text-lg hover:underline cursor-pointer"
        >
          View All
        </Link>
      </div>
      <div className="flashSales w-[100%] max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {ProductCardHome.map((items, idx) => (
          <div
            className="Card flex flex-col justify-start items-start bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
            key={idx}
          >
            <div className="containerTitle w-full p-4 flex flex-col items-center bg-red-50 border-b border-gray-200">
              <p className="w-full text-center text-md font-semibold text-gray-400">
                {items.title}
              </p>
              <div className="containerTime flex flex-col w-full items-center mt-2">
                <p className="text-2xl font-bold text-gray-900 tracking-wider">
                  {items.DateSale}
                </p>
                <p className="w-auto text-xs text-gray-600 flex justify-between gap-6 mt-1">
                  <span>hour</span>
                  <span>min</span>
                  <span>sec</span>
                </p>
              </div>
            </div>

            <div className="ContainerImg flex justify-start p-5 w-[100%] h-[270px]">
              <div style={items.bgColor} className="w-[80%] h-[100%] " />
            </div>

            <div className="container-footerFlash w-full p-4 flex flex-col gap-2 items-start justify-start border-t border-gray-100">
              <div className="container-Brand w-full flex flex-col gap-1">
                <p className="w-full text-lg font-bold text-gray-900">
                  {items.Modal}
                </p>
                <p className="text-sm text-gray-600">{items.ModalTitle}</p>
                <div className="flex items-center">
                  <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                  <span className="text-xs text-gray-500 ml-1">(54)</span>
                </div>
              </div>

              <div className="containerPrice w-full flex gap-3 flex-row items-center justify-start mt-2">
                <span className="text-lg font-bold text-red-500">
                  {items.Salary}
                </span>
                <span className="text-md text-gray-500 line-through">
                  {items.OldSalaty}
                </span>
                <span className="text-[9px] text-white font-bold p-1 rounded-[3px] bg-red-600">
                  {items.discount}
                </span>
              </div>
            </div>
            <div className="btn w-30 rounded-md  mx-3 mb-3 outline-none bg-blue-600 text-center">
              <button
                className="text-[12px] p-1 text-white m-2 "
                onClick={() => {
                  AddToCart(items);
                  <Toaster position="bottom-center" reverseOrder={true} />;
                }}
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default memo(Cards);
