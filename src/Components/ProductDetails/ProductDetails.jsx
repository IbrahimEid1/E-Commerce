import Navbar from "../Nav/Navbar";
import NavBlack from "../Nav/NavBlack";
import NavCat from "../Category/NavCat";
import { AllProducts } from "../Category/AllProducts";
import { memo, useContext, useState } from "react";
import { CirclePlus, Heart } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../../context/ContextCart";
import Example from "./ComponentTabs";
import Tabs from "./ComponentTabs";
const ProductDetails = () => {
  const { id } = useParams();
  const Products = AllProducts.find((item) => item.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const { AddToCart, AddToFav } = useContext(CartContext);

  return (
    <>
      <Navbar />
      <NavBlack />
      <div>
        <NavCat />
      </div>
      <div className="flex flex-col md:flex-row gap-6 p-6">
        <div className="w-full md:w-1/2 flex gap-4">
          <div className="flex flex-col gap-2">
            <div
              style={Products.bgColor}
              className="w-20 h-24 object-cover rounded-md cursor-pointer border"
            ></div>
            <div
              style={{ backgroundColor: "purple" }}
              className="w-20 h-24 object-cover rounded-md cursor-pointer border"
            ></div>
            <div
              style={{ backgroundColor: "red" }}
              className="w-20 h-24 object-cover rounded-md cursor-pointer border"
            ></div>
            <div
              style={{ backgroundColor: "crimson" }}
              className="w-20 h-24 object-cover rounded-md cursor-pointer border"
            ></div>
          </div>
          {/* Big Image */}
          <div className="flex-1">
            <div
              style={Products.bgColor}
              alt="product"
              className="w-full h-[500px] object-cover rounded-lg border"
            ></div>
          </div>
        </div>

        <div className="w-full md:w-1/2 space-y-6">
          {/* Title + Favorite */}
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-semibold"> {Products.title}</h2>
            <button className="text-gray-500 hover:text-red-500">
              <Heart
                onClick={() => {
                  AddToFav(Products);
                }}
              />
            </button>
          </div>

          {/* Price */}
          <p className="text-2xl font-bold"> {Products.price} </p>

          {/* Sizes */}
          <div>
            <p className="text-sm mb-2">Size</p>
            <div className="flex gap-2">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className="border rounded px-4 py-2 hover:bg-gray-100 text-sm"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div>
            <p className="text-sm mb-2">Color</p>
            <div className="flex gap-3">
              {[
                { backgroundColor: "Purple" },
                { backgroundColor: "red" },
                { backgroundColor: "Crimson" },
              ].map((color, index) => (
                <span
                  key={index}
                  className="w-6 h-6 rounded-full cursor-pointer border"
                  style={color}
                ></span>
              ))}
            </div>
          </div>

          {/* Shipping */}
          <div className="text-sm text-gray-600">
            Free Shipping to Victoria territory <br />
            <span className="text-xs">Delivery Time: 12–47 days</span>
          </div>

          {/* Quantity */}
          <div className="flex items-center gap-2">
            <button
              className="border px-3 py-1 text-lg"
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              -
            </button>
            <span className="px-4 text-lg">{quantity}</span>
            <button
              className="border px-3 py-1 text-lg"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
            <p className="text-sm text-gray-500 ml-3">
              50 available / 104 sold
            </p>
          </div>

          {/* Total */}
          <div className="border p-4 bg-gray-300 rounded text-black ">
            <p className="font-semibold text-lg">
              ${(39.99 * quantity).toFixed(2)}
            </p>
            <div className=" flex space-x-1 items-center">
              <CirclePlus className="w-5 text-zinc-500" />

              <p className="text-xs text-black flex ">
                Add shipping insurance for $9 (in case lost, stolen or damaged)
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
              SHOP NOW
            </Link>
            <button
              onClick={() => {
                AddToCart(Products);
              }}
              className="border px-8 py-3 rounded-lg hover:bg-gray-100"
            >
              ADD TO BASKET
            </button>
          </div>
        </div>
      </div>
      <Tabs />
    </>
  );
};
export default memo(ProductDetails);
