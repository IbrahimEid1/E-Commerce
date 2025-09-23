import { useState } from "react";
import ContentProductDetails from "./ContentProductDetails";
import ProductSuggested from "./ProductSuggested";
import Reviews from "./Review";
import ShippingPayment from "./ShippingPayment";

const Tabs = () => {
  const [active, setActive] = useState("ProductDetails");

  return (
    <div className="w-full flex flex-col max-w-full">
      <hr className="w-[90%] mx-auto" />

      <div className="flex flex-wrap border-b w-full justify-center gap-6 sm:gap-12 lg:gap-24 text-sm sm:text-base">
        <button
          className={`px-2 sm:px-4 py-2 ${
            active === "ProductDetails"
              ? "border-b-2 border-red-500 font-bold text-red-600"
              : "text-gray-600"
          }`}
          onClick={() => setActive("ProductDetails")}
        >
          Product details
        </button>
        <button
          className={`px-2 sm:px-4 py-2 ${
            active === "Reviews"
              ? "border-b-2 border-red-500 font-bold text-red-600"
              : "text-gray-600"
          }`}
          onClick={() => setActive("Reviews")}
        >
          Reviews
        </button>
        <button
          className={`px-2 sm:px-4 py-2 ${
            active === "ShippingPayment"
              ? "border-b-2 border-red-500 font-bold text-red-600"
              : "text-gray-600"
          }`}
          onClick={() => setActive("ShippingPayment")}
        >
          Shipping & Payment
        </button>
      </div>

      {/* Tabs Content */}
      <div className="p-4 sm:p-6 lg:p-8">
        {active === "ProductDetails" && <ContentProductDetails />}
        {active === "Reviews" && <Reviews />}
        {active === "ShippingPayment" && <ShippingPayment />}
      </div>
    </div>
  );
};

export default Tabs;
