import React, { useContext } from "react";
import { DataProductsSug } from "./DataProductsSug";
import { CartContext } from "../../context/ContextCart";

const ProductSuggested = () => {
  const { AddToCart } = useContext(CartContext);
  return (
    <div className="w-[100%] h-[400px] flex flex-col items-center text-black">
      <div className="w-[96%] h-[100%] flex flex-col justify-start gap-14">
        <h1 className="text-md font-bold w-[18%] uppercase font-lato flex justify-center">
          YOU MIGHT ALSO LIKE
        </h1>
        <div className="w-[100%] h-[119px] flex flex-row ">
          {DataProductsSug.map((pro) => (
            <div
              className="flex  w-[100%]  h-[100%] justify-evenly"
              key={pro.id}
            >
              <img src={pro.img} />
              <div className="flex flex-col items-center justify-center gap-2">
                {" "}
                <h1 className="text-sm font-bold">{pro.title} </h1>
                <div className="w-[100%] justify-center flex flex-row gap-1">
                  <span className="text-sm font-bold text-red-500 ">
                    {" "}
                    {pro.price}{" "}
                  </span>
                  <span className="text-sm font-bold text-zinc-500 ">
                    {" "}
                    {pro.oldPrice}{" "}
                  </span>
                  <span className="text-[9px] w-[30px] text-white font-bold p-1 rounded-[3px] bg-red-600">
                    {pro.discount}
                  </span>
                </div>
                <button
                  onClick={() => {
                    AddToCart(pro);
                  }}
                  className="w-[158px] h-[36px] rounded-sm text-black font-medium border-[0.5px]  border-zinc-400"
                >
                  {" "}
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
