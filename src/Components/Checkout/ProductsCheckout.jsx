import React, { useContext, useEffect, useState, lazy, Suspense } from "react";
import { CartContext } from "../../context/ContextCart";
import { useNavigate } from "react-router-dom";
import useOrderCustomer from "../../hooks/OrderCustomer";
import toast from "react-hot-toast";

const ComponentsCards = lazy(() => import("./CoponentsCards"));
const CustomerInformation = lazy(() => import("./CustomerInformation"));
const Shipping = lazy(() => import("./Shipping"));
const DoneOrder = lazy(() => import("./DoneOrder"));

const ProductsCheckout = () => {
  const CustomerOrder = useOrderCustomer();
  const { setActive, cartCount, active, newOrder, shippingCost } =
    useContext(CartContext);

  const [discountCode, setDiscountCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [error, setError] = useState("");
  const [disable, setDisable] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [isOrderDone, setIsOrderDone] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setDisabled(cartCount.length > 0);
  }, [cartCount]);

  const subtotal = cartCount.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = subtotal + shippingCost - discount;
  const FinalTotal = total.toFixed(2);

  const handelDiscount = () => {
    const codes = { Sale20: 0.2, Sale50: 0.5 };
    const discountValue = codes[discountCode];
    if (discountValue) {
      setDiscount(total * discountValue);
      setError("");
      setDisable(true);
    } else {
      setDiscount(0);
      setError("Invalid discount code");
      setDisable(false);
    }
    setDiscountCode("");
  };

  const ConvertAndChecked = () => {
    if (cartCount.length === 0) {
      toast.error("سلتك فاضية، أضف منتجات أولاً!");
      navigate("/allproduct");
      return;
    }

    if (active === "Cards") return setActive("CustomerInformation");

    if (active === "CustomerInformation") {
      const { firstName, lastName, email, phone, address, country, city } =
        newOrder.data || {};
      if (!firstName || !lastName || !email || !phone || !address || !country || !city) {
        toast.error("من فضلك أكمل بياناتك قبل المتابعة!");
        return;
      }
      setActive("ShippingPayment");
      return;
    }

    if (active === "ShippingPayment") {
      const { TypeShipping, TypePay } = newOrder.data || {};
      if (!TypeShipping || !TypePay) {
        toast.error("من فضلك أكمل الشحن والدفع!");
        return;
      }

      CustomerOrder.mutate(newOrder, {
        onSuccess: () => setIsOrderDone(true),
        onError: () => toast.error("فشل في إنشاء الطلب!"),
      });
    }
  };

  return (
    <>
      <Suspense fallback={<p className="text-center text-gray-600">Loading...</p>}>
        {isOrderDone && (
          <DoneOrder
            isOpen={isOrderDone}
            onClose={() => {
              setIsOrderDone(false);
              navigate("/");
            }}
          />
        )}
        <div className="flex flex-col lg:flex-row justify-center gap-4 p-4 items-start flex-wrap">
          <div className="w-full lg:w-[60%] space-y-4">
            <div className="flex gap-6 justify-center">
              {["Cards", "CustomerInformation", "ShippingPayment"].map((step) => (
                <button
                  key={step}
                  onClick={() => setActive(step)}
                  disabled={!disabled}
                  className={`px-4 py-2 ${
                    active === step
                      ? "border-b-2 border-red-500 text-red-600 font-bold"
                      : disabled
                      ? "text-gray-700 hover:text-red-600"
                      : "text-gray-400 cursor-not-allowed opacity-60"
                  }`}
                >
                  {step}
                </button>
              ))}
            </div>

            <div className="p-6 bg-white rounded-lg shadow">
              {active === "Cards" && <ComponentsCards />}
              {active === "CustomerInformation" && <CustomerInformation />}
              {active === "ShippingPayment" && <Shipping />}
            </div>
          </div>

          {active !== "CustomerInformation" && (
            <div className="w-full lg:w-80 border rounded-lg p-4 bg-gray-200">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              <div className="space-y-1 text-sm">
                <p className="flex justify-between"><span>Price</span><span>${subtotal}</span></p>
                <p className="flex justify-between"><span>Shipping</span><span>${shippingCost}</span></p>
                <p className="flex justify-between text-gray-700"><span>Discount</span><span>${discount}</span></p>
                <hr />
                <p className="flex justify-between font-semibold"><span>Total</span><span>${FinalTotal}</span></p>
              </div>

              <button
                onClick={ConvertAndChecked}
                className="w-full mt-4 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
              >
                🛒 CHECKOUT
              </button>

              <div className="mt-3 flex gap-2">
                <input
                  type="text"
                  className="flex-1 border p-2 rounded"
                  placeholder="Enter discount"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                />
                <button
                  onClick={handelDiscount}
                  disabled={disable}
                  className={`px-4 py-2 rounded text-white ${
                    disable ? "bg-gray-400 cursor-not-allowed" : "bg-black hover:bg-gray-800"
                  }`}
                >
                  Apply
                </button>
              </div>
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>
          )}
        </div>
      </Suspense>
    </>
  );
};

export default ProductsCheckout;
