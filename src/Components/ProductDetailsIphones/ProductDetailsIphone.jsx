import { Iphones } from "../Category/AllProducts";
import { memo, useContext, useState } from "react";
import { CirclePlus } from "lucide-react";
import Heart from "../../UI/Heart";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../../context/ContextCart";
import Navbar from "../Nav/Navbar";
import NavBlack from "../Nav/NavBlack";
import Tabs from "../ProductDetails/ComponentTabs";
import ProductSuggested from "../ProductDetails/ProductSuggested";
import Footer from "../ProductDetails/Footer";
import FooterVisa from "../ProductDetails/FooterVisa";

const ProductDetailsIphone = () => {
  const { id } = useParams();
  const Alliphone = Iphones.find((item) => item.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const { AddToCart, AddToFav } = useContext(CartContext);

  console.log(id);
  const Sizes = [
    { id: 1, size: "6GB" },
    { id: 2, size: "128GB" },
    { id: 3, size: "256GB" },
    { id: 4, size: "500GB" },
    { id: 5, size: "1024GB" },
  ];

  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <>
      <Navbar />
      <NavBlack />

      <div className="flex flex-col lg:flex-row gap-4 md:gap-6 p-3 sm:p-4 md:p-6 max-w-7xl mx-auto">
        <div className="w-full lg:w-1/2 flex flex-col sm:flex-row gap-2 md:gap-4">
          <div className="flex flex-col w-full sm:order-2">
            <img
              src={Alliphone.image}
              alt="product"
              className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover rounded-lg border"
            />

            <div className="flex flex-col justify-center sm:flex-row gap-8 mt-4  flex-wrap">
              {Iphones.map((img, index) => (
                <img
                  key={index}
                  src={img.image}
                  alt={`product-${index}`}
                  className="w-16 h-20 sm:w-16 sm:h-20 md:w-20 md:h-24 object-cover rounded-md cursor-pointer border flex-shrink-0"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 space-y-4 md:space-y-6">
          <div className="flex justify-between items-start gap-3">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold leading-tight flex-1">
              {Alliphone.title}
              <p className="text-xl sm:text-2xl font-bold">{Alliphone.price}</p>
            </h2>

            <Heart
              onClick={() => AddToFav(Iphones)}
              className="flex-shrink-0"
            />
          </div>

          <div>
            <p className="text-sm mb-2 font-medium">LPDDR5 RAM</p>
            <div className="flex flex-wrap gap-2">
              {Sizes.map((size) => (
                <button
                  key={size.id}
                  onClick={() => setSelectedSize(size.id)}
                  className={`px-3 py-3 rounded-lg font-medium transition-colors duration-300
                    ${
                      selectedSize === size.id
                        ? "bg-blue-600 text-white"
                        : "bg-trasparent text-gray-700 hover:bg-gray-300"
                    }`}
                >
                  {size.size}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm mb-2 font-medium">Color</p>
            <div className="flex gap-3">
              {Iphones.map((color, index) => (
                <span
                  key={index}
                  className="w-6 h-6 md:w-7 md:h-7 rounded-full cursor-pointer border-2 border-gray-300 hover:border-gray-500 transition-colors duration-200"
                  style={color}
                ></span>
              ))}
            </div>
          </div>

          <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded-md">
            <p className="font-medium">Free Shipping to Victoria territory</p>
            <span className="text-xs text-gray-500">
              Delivery Time: 12–47 days
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="flex items-center gap-2 border rounded-md">
              <button
                className="px-3 py-2 text-lg hover:bg-gray-100 transition-colors duration-200"
                onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
              >
                -
              </button>
              <span className="px-4 py-2 text-lg border-x">{quantity}</span>
              <button
                className="px-3 py-2 text-lg hover:bg-gray-100 transition-colors duration-200"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
            <p className="text-sm text-gray-500">50 available / 104 sold</p>
          </div>

          <div className="border p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold text-lg md:text-xl text-gray-800">
              ${(960.99 * quantity).toFixed(2)}
            </p>
            <div className="flex items-start gap-2 mt-2">
              <CirclePlus className="w-4 h-4 md:w-5 md:h-5 text-zinc-500 mt-0.5 flex-shrink-0" />
              <p className="text-xs md:text-sm text-gray-600">
                Add shipping insurance for $9 (in case lost, stolen or damaged)
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link className="bg-blue-600 text-white px-6 md:px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-center font-medium">
              SHOP NOW
            </Link>
            <button
              onClick={() => {
                AddToCart(Iphones);
              }}
              className="border border-gray-300 px-6 md:px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium"
            >
              ADD TO BASKET
            </button>
          </div>
        </div>
      </div>
      <Tabs />
      <ProductSuggested />
      <Footer />
      <FooterVisa />
    </>
  );
};

export default memo(ProductDetailsIphone);
