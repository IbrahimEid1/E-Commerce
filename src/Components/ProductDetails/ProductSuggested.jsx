import React, { useContext } from "react";
import { DataProductsSug } from "./DataProductsSug";
import { CartContext } from "../../context/ContextCart";

const ProductSuggested = () => {
  const { AddToCart } = useContext(CartContext);

  return (
    <div className="w-full py-6 flex flex-col items-center text-black">
      <div className="w-[96%] flex flex-col gap-10">
        <h1 className="text-md font-bold w-fit uppercase font-lato text-center sm:text-left">
          YOU MIGHT ALSO LIKE
        </h1>

        <div className="flex flex-wrap justify-center gap-6">
          {DataProductsSug.map((pro) => (
            <div
              className="flex flex-row items-center w-full sm:w-[48%] md:w-[32%] lg:w-[23%] h-[119px] justify-evenly border border-gray-200 rounded-md p-2"
              key={pro.id}
            >
              <img
                src={pro.img}
                alt={pro.title}
                className="w-[100px] h-[100px] object-contain"
              />

              <div className="flex flex-col items-center justify-center gap-2">
                <h1 className="text-sm font-bold text-center">{pro.title}</h1>

                <div className="flex flex-row gap-2 items-center justify-center">
                  <span className="text-sm font-bold text-red-500">
                    {pro.price}
                  </span>
                  <span className="text-sm font-bold text-zinc-500 line-through">
                    {pro.oldPrice}
                  </span>
                  <span className="text-[9px] w-[30px] text-white font-bold p-1 rounded-[3px] bg-red-600 text-center">
                    {pro.discount}
                  </span>
                </div>

                <button
                  onClick={() => AddToCart(pro)}
                  className="w-[158px] h-[36px] rounded-sm text-black font-medium border border-zinc-400 hover:bg-black hover:text-white transition"
                >
                  {pro.priceInBtn} Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSuggested;
