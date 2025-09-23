import React, { memo, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/ContextCart";
import Heart from "../../UI/Heart";
import Star from "../../UI/Stars";
import { Iphones } from "../Category/AllProducts";
const MainContentIphones = () => {
  const { AddToCart } = useContext(CartContext);
  const { AddToFav } = useContext(CartContext);

  return (
    <div className="flashSales w-[100%] max-w-[70rem] h-[150vh]  mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-2 sm:px-4 md:px-0">
      {Iphones.map((items, idx) => (
        <div
          className="Card flex h-[600px] flex-col justify-start items-start bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
          key={idx}
        >
          <div className="ContainerImg flex justify-center p-3 sm:p-4 md:p-5 w-[100%] h-[200px] sm:h-[300px] md:h-[370px]">
            <Link
              to={`/Alliphone/${items.id}`}
              className="w-[100%] flex flex-col  justify-center h-[100%] object-cover rounded-lg"
            >
              {" "}
              <img src={items.image} alt="" className={items.className} />
            </Link>
          </div>

          <div className="container-footerFlash w-full p-3 sm:p-4 flex flex-col gap-2 items-start justify-start border-t border-gray-100">
            <div className="container-Brand w-full flex flex-col ">
              <p className="w-full text-xs sm:text-sm md:text-[12px] font-bold text-gray-900 line-clamp-2">
                {items.title}
              </p>
              <p className="text-xs sm:text-xs md:text-[10px] text-gray-600 line-clamp-3 flex flex-row w-full  items-center justify-between ">
                {items.description}
                <Heart
                  onClick={() => {
                    AddToFav(items);
                  }}
                />
              </p>
              <div className="flex items-center mt-1 flex-row justify-between w-full">
                <div className="flex text-yellow-400 justify-evenly items-center ">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <span className="text-xs text-gray-500 ml-1">(54)</span>
                </div>
                <div></div>
              </div>
            </div>

            <div className="containerPrice w-full flex gap-2 sm:gap-3 flex-row items-center justify-start mt-2">
              <span className="text-sm sm:text-base md:text-[14px] font-bold text-red-500">
                {items.price}
              </span>
              <span className="text-xs sm:text-sm md:text-[12px] text-gray-500 line-through">
                {items.oldPrice}
              </span>
              <span className="text-xs sm:text-xs md:text-[9px] text-white font-bold px-1 py-1 rounded-[3px] bg-red-600">
                {items.discount}
              </span>
            </div>
          </div>
          <div className="btn w-30 rounded-md  mx-3 mb-3 outline-none bg-blue-600 text-center">
            <button
              className="text-[12px] p-1 text-white m-2 "
              onClick={() => {
                AddToCart(items);
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default memo(MainContentIphones);
