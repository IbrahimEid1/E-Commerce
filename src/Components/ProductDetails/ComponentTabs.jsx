import { useState } from "react";
import ContentProductDetails from "./ContentProductDetails";
import ProductSuggested from "./ProductSuggested";

const Tabs = () => {
  const [active, setActive] = useState("ProductDetails");

  return (
    <div className="w-full h-[100vh] flex flex-col max-w-[100%]">
      <hr className="w-[80%]" />
      <div className="flex border-b w-[100%] justify-center">
        <button
          className={`px-4 py-2 ${
            active === "ProductDetails"
              ? "border-b-2 border-red-500 font-bold"
              : ""
          }`}
          onClick={() => setActive("ProductDetails")}
        >
          Product details
        </button>
        <button
          className={`px-4 py-2 ${
            active === "Reviews" ? "border-b-2 border-red-500 font-bold" : ""
          }`}
          onClick={() => setActive("Reviews")}
        >
          Reviews
        </button>
        <button
          className={`px-4 py-2 ${
            active === "ShippingPayment"
              ? "border-b-2 border-red-500 font-bold"
              : ""
          }`}
          onClick={() => setActive("ShippingPayment")}
        >
          Shipping & Payment
        </button>
      </div>

      <div className="p-4">
        {active === "ProductDetails" && <ContentProductDetails />}
        {active === "tab2" && <div>Content for Tab 2</div>}
        {active === "tab3" && <div>Content for Tab 3</div>}
      </div>
      <ProductSuggested />
    </div>
  );
};

export default Tabs;
