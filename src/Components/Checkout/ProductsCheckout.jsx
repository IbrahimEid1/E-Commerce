import { useContext, useEffect, useState } from "react";

import { CartContext } from "../../context/ContextCart";
import ComponentsCards from "./CoponentsCards";
import CustomerInformation from "./CustomerInformation";
import Shipping from "./Shipping";
import { useNavigate } from "react-router-dom";
import useOrderCustomer from "../../hooks/OrderCustomer";
import toast from "react-hot-toast";
const ProductsCheckout = () => {
  const CustomerOrder = useOrderCustomer()
  const { setActive, selectedShipping, cartCount, active, newOrder } = useContext(CartContext);
  const [discountCode, setDiscountCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [error, setError] = useState("");
  const [disable, setDisable] = useState(false);
  const { shippingCost } = useContext(CartContext);
  const [disabled, setDisabled] = useState(false)
  const [success , setSuccess] = useState(false)

  useEffect(() => {
    if (cartCount.length === 0) {
      setDisabled(false)
    } else if (cartCount.length > 0) {
      setDisabled(true)
    }
  }, [cartCount])
  const subtotal = cartCount.reduce(
    (acc, item) => acc + parseFloat(item.price) + Number() * discount, 0
  );
  const giftBox = 10.9;
  const handelDiscount = () => {
    if (discountCode === "Sale20") {
      setDiscount(total * 0.2);
      setError("");
      setDisable(true);
      setDiscountCode("");
    } else if (discountCode === "Sale50") {
      setDiscount(total * 0.50);
      setError("");
      setDisable(true);
      setDiscount("");
    } else {
      setDiscount(0);
      setError("Faild in Your Discount");
      setDisable(false);
    }
  };
  const total = Number(subtotal) + Number(giftBox) - Number(shippingCost) - Number(discount)
  const FinalTotal = total.toFixed(0)
  const Navigate = useNavigate()
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
    const { firstName, lastName, email, phone, address, country, city } = newOrder.data || {};
    if (!firstName?.trim() ||!lastName?.trim() ||!email?.trim() ||!phone ||!address?.trim() ||
      !country?.trim() ||
      !city?.trim()
    ) {
      toast.error("من فضلك أكمل بياناتك قبل المتابعة!");
      console.log(newOrder);
      
     return;
    }
    setActive("ShippingPayment");
    return;
  }

  if (active === "ShippingPayment") {
    const { TypeShipping, TypePay } = newOrder.data || {};
    if (!TypeShipping || !TypePay) {
      toast.error("من فضلك أكمل الشحن والدفع!");
      return
    } 
    CustomerOrder.mutate(newOrder, {
      onSuccess: (res) => {
        toast.success("✅ تم إنشاء الطلب بنجاح!");
        console.log("Response:", res);
        
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
      <div className="flex flex-col md:flex-row justify-center gap-6 p-6 items-start flex-wrap">
        <div
          className="w-[60%] flex flex-col justify-start space-y-4 mx-auto 
                        max-h-auto pr-2"
        >
          <div className="w-full flex flex-col max-w-full">
            <hr className="w-[90%] mx-auto" />

            <div className="flex flex-wrap border-b w-full justify-center gap-6 sm:gap-12 lg:gap-24 text-sm sm:text-base">
              <button
                className={`px-2 sm:px-4 py-2 ${active === "ShippingPayment"
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
                className={`px-2 sm:px-4 py-2 ${active === "ShippingPayment"
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
                className={`px-2 sm:px-4 py-2 ${active === "ShippingPayment"
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
            <div className="p-4 sm:p-6 lg:p-8">
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
        <div className="w-full h-[50vh] flex flex-col justify-center md:w-80 border rounded-lg p-4 bg-gray-200 mr-16">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

          <div className="flex justify-between py-1">
            <span>Price</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between py-1">
            <span>Shipping</span>
            <span> $ {shippingCost} </span>
          </div>
          <div className="flex justify-between py-1">
            <span>Tax</span>
            <span>$0</span>
          </div>
          <div className="flex justify-between py-1 text-red-500 text-sm">
            <span className="text-gray-700">Discount :</span>
            <span> {discount} </span>
          </div>

          <div className="flex items-center gap-2 py-2">
            <input type="checkbox" defaultChecked className="w-4 h-4" />
            <span>Pack in a Gift Box</span>
            <span className="ml-auto">${giftBox.toFixed(2)}</span>
          </div>

          <hr className="my-2" />

          <div className="flex justify-between font-semibold text-lg">
            <span>Total Price</span>
            <span>${FinalTotal}</span>
          </div>

          <button onClick={ConvertAndChecked} className="w-full mt-4 bg-black text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800">
            🛒 CHECKOUT
          </button>

          <div className="w-full h-[100px] flex flex-col justify-center">
            <div className="w-[95%] flex justify-end ">
              <input
                type="text"
                className="w-[197px] h-[56px] border p-2 rounded"
                placeholder="Enter Your Discount"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
              />
              <button
                onClick={handelDiscount}
                className={
                  disable
                    ? " bg-slate-400 px-5  w-30  text-[12px] text-white h-[56px]"
                    : "bg-black px-5 text-[12px] text-white h-[56px]"
                }
                disabled={disable}
              >
                {disable ? "Enter Your code" : "Enter Your code"}
              </button>
            </div>
            {error && (
              <p className="text-red-500 text-sm  mr-5 text-end">{error}</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsCheckout;
