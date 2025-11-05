import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/ContextCart";
import ComponentsCards from "./CoponentsCards";
import CustomerInformation from "./CustomerInformation";
import Shipping from "./Shipping";
import DoneOrder from "./DoneOrder"; 
import { useNavigate } from "react-router-dom";
import useOrderCustomer from "../../hooks/OrderCustomer";
import toast from "react-hot-toast";

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
const Navigate = useNavigate()
  useEffect(() => {
    if (cartCount.length === 0) setDisabled(false);
    else if (cartCount.length > 0) setDisabled(true);
  }, [cartCount]);

  const subtotal = cartCount.reduce(
    (acc, item) => acc + parseFloat(item.price) + Number() * discount,
    0
  );

  const giftBox = 10.9;
  const total =
    Number(subtotal) + Number(giftBox) - Number(shippingCost) - Number(discount);
  const FinalTotal = total.toFixed(0);

  const handelDiscount = () => {
    if (discountCode === "Sale20") {
      setDiscount(total * 0.2);
      setError("");
      setDisable(true);
      setDiscountCode("");
    } else if (discountCode === "Sale50") {
      setDiscount(total * 0.5);
      setError("");
      setDisable(true);
      setDiscount("");
    } else {
      setDiscount(0);
      setError("Faild in Your Discount");
      setDisable(false);
    }
  };


  const ConvertAndChecked = () => {
    if (cartCount.length === 0) {
      toast.error("سلتك فاضية، أضف منتجات أولاً!");
      Navigate("/allproduct");
      return;
    }

    if (active === "Cards") {
      setActive("CustomerInformation");
      return;
    }
    if (active === "CustomerInformation") {
      const { firstName, lastName, email, phone, address, country, city } =
        newOrder.data || {};
      if (
        !firstName?.trim() ||
        !lastName?.trim() ||
        !email?.trim() ||
        !phone ||
        !address?.trim() ||
        !country?.trim() ||
        !city?.trim()
      ) {
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
        onSuccess: () => {
          setIsOrderDone(true);
        },
        onError: (err) => {
          console.error("❌ Error:", err);
          toast.error("فشل في إنشاء الطلب!");
        },
      });
    }
  };




  return (
    <>
    {
    <DoneOrder
        isOpen={isOrderDone}
        onClose={() =>{ setIsOrderDone(false);  Navigate("/")}}
      />}
      <div className="flex flex-col lg:flex-row justify-center gap-4 sm:gap-6 p-3 sm:p-4 md:p-6 items-start flex-wrap">
        <div
          className="w-full lg:w-[60%] flex flex-col justify-start space-y-3 sm:space-y-4 mx-auto 
                        max-h-auto pr-0 sm:pr-2"
        >
          <div className="w-full flex flex-col max-w-full">
            <hr className="w-full sm:w-[90%] mx-auto" />

            <div className="flex flex-wrap border-b w-full justify-center gap-3 sm:gap-6 md:gap-12 lg:gap-24 text-xs sm:text-sm md:text-base overflow-x-auto">
              <button
                className={`px-2 sm:px-3 md:px-4 py-2 whitespace-nowrap ${active === "ShippingPayment"
                  ? "border-b-2 border-red-500 font-bold text-red-600"
                  : disabled
                    ? "text-gray-700 hover:text-red-600 hover:border-b-2 hover:border-red-500"
                    : "text-gray-400 bg-gray-100 cursor-not-allowed opacity-60"
                  }`}
                onClick={() => setActive("Cards")}
              >
                Cards
              </button>
              <button disabled={disabled === false ? "Required Data" : null}
                className={`px-2 sm:px-3 md:px-4 py-2 whitespace-nowrap ${active === "ShippingPayment"
                  ? "border-b-2 border-red-500 font-bold text-red-600"
                  : disabled
                    ? "text-gray-700 hover:text-red-600 hover:border-b-2 hover:border-red-500"
                    : "text-gray-400 bg-gray-100 cursor-not-allowed opacity-60"
                  }`}
                onClick={() => setActive("CustomerInformation")}
              >
                CustomerInformation
              </button>
              <button
                disabled={disabled === false ? "Required Data" : null}
                className={`px-2 sm:px-3 md:px-4 py-2 whitespace-nowrap ${active === "ShippingPayment"
                  ? "border-b-2 border-red-500 font-bold text-red-600"
                  : disabled
                    ? "text-gray-700 hover:text-red-600 hover:border-b-2 hover:border-red-500"
                    : "text-gray-400 bg-gray-100 cursor-not-allowed opacity-60"
                  }`}
                onClick={() => setActive("ShippingPayment")}
              >
                Shipping & Payment
              </button>
            </div>

            {/* Tabs Content */}
            <div className="p-3 sm:p-4 md:p-6 lg:p-8">
              {active === "Cards" && <ComponentsCards />}
              {/* <div>
                <button className="p-1 rounded-md bg-amber-500 text-white hover:bg-amber-700 transition">Compolete your Order</button>
              </div> */}
              {active === "CustomerInformation" && <CustomerInformation />}
              {active === "ShippingPayment" && <Shipping />}
            </div>
          </div>
        </div>

        {/* Right - Order Summary */}
       {active==="CustomerInformation" ? null :  <div className="w-full lg:w-80 h-auto lg:h-[50vh] flex flex-col justify-center border rounded-lg p-3 sm:p-4 bg-gray-200 lg:mr-16 mx-auto lg:mx-0">
          <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Order Summary</h2>

          <div className="flex justify-between py-1 text-sm sm:text-base">
            <span>Price</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between py-1 text-sm sm:text-base">
            <span>Shipping</span>
            <span> $ {shippingCost} </span>
          </div>
          <div className="flex justify-between py-1 text-sm sm:text-base">
            <span>Tax</span>
            <span>$0</span>
          </div>
          <div className="flex justify-between py-1 text-red-500 text-xs sm:text-sm">
            <span className="text-gray-700">Discount :</span>
            <span> {discount} </span>
          </div>

          <div className="flex items-center gap-2 py-2 text-xs sm:text-sm">
            <input type="checkbox" defaultChecked className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Pack in a Gift Box</span>
            <span className="ml-auto">${giftBox.toFixed(2)}</span>
          </div>

          <hr className="my-2" />

          <div className="flex justify-between font-semibold text-base sm:text-lg">
            <span>Total Price</span>
            <span>${FinalTotal}</span>
          </div>

          <button onClick={ConvertAndChecked} className="w-full mt-3 sm:mt-4 bg-black text-white py-2 sm:py-2.5 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 text-sm sm:text-base transition-colors">
            🛒 CHECKOUT
          </button>

          <div className="w-full h-auto sm:h-[100px] flex flex-col justify-center mt-3 sm:mt-0">
            <div className="w-full flex flex-col sm:flex-row justify-end gap-2 sm:gap-0">
              <input
                type="text"
                className="w-full sm:w-[150px] md:w-[197px] h-[48px] sm:h-[56px] border p-2 rounded text-sm sm:text-base"
                placeholder="Enter Your Discount"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
              />
              <button
                onClick={handelDiscount}
                className={`h-[48px] sm:h-[56px] px-3 sm:px-5 text-xs sm:text-[12px] text-white rounded sm:rounded-none transition-colors ${
                  disable
                    ? "bg-slate-400 cursor-not-allowed"
                    : "bg-black hover:bg-gray-800"
                }`}
                disabled={disable}
              >
                {disable ? "Enter Your code" : "Enter Your code"}
              </button>
            </div>
            {error && (
              <p className="text-red-500 text-xs sm:text-sm mr-0 sm:mr-5 text-start sm:text-end mt-1">{error}</p>
            )}
          </div>
        </div>}
      </div>
    </>
  );
};

export default ProductsCheckout;