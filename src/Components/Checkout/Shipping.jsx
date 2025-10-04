import React, { useContext, useState } from "react";
import { Check } from "lucide-react";
import logo3 from "../../assets/b6a0443def60ee05c9501efffe3544bee6560d25.gif";
import logo2 from "../../assets/5dae0dc5ba0350bc45bb8e052ffd83493be22c5d.png";
import logo1 from "../../assets/c3cd6b27d44d2742024d3856494f8f50abda2b34.png";
import Paypal from "../../../public/paypal.png";
import MasterCard from "../../../public/mastercard.png";
import Bitcoin from "../../../public/Bitcoin.png";
import { CartContext } from "../../context/ContextCart";
export default function Shipping() {
  const [selectedPayment, setSelectedPayment] = useState("paypal");
  const [selectedShipping, setSelectedShipping] = useState("");
  const { setShippingCost } = useContext(CartContext);

  const paymentMethods = [
    {
      id: "paypal",
      name: "Paypal",
      logo: Paypal,
      description:
        "PayPal is a trusted and the payment platform that allows individuals and businesses to securely send and receive money electronically.",
    },
    {
      id: "mastercard",
      name: "Mastercard",
      logo: MasterCard,
      description:
        "PayPal is a trusted and the payment platform that allows individuals and businesses to securely send and receive money electronically.",
    },
    {
      id: "bitcoin",
      name: "Bitcoin",
      logo: Bitcoin,
      description:
        "PayPal is a trusted and the payment platform that allows individuals and businesses to securely send and receive money electronically.",
    },
  ];

  const shippingMethods = [
    {
      id: "ausff",
      name: "AUSFF",
      logo: logo1,
      delivery: "Delivery time: 14-21 days",
      cost: "Shipping cost: Free",
      insurance: "Insurance: Unavailable",
      insuranceColor: "text-red-500",
    },
    {
      id: "newCouriers",
      name: "NewCouriers",
      logo: logo2,
      delivery: "Delivery time: 14-21 days",
      cost: "Shipping cost: $10",
      priceShipping: 10,
      insurance: "Insurance: Available",
      insuranceColor: "text-green-500",
    },
    {
      id: "transoCargo",
      name: "TransoCargo",
      logo: logo3,
      delivery: "Delivery time: 14-21 days",
      cost: "Shipping cost: $12",
      priceShipping: 12,
      insurance: "Insurance: Available",
      insuranceColor: "text-green-500",
    },
  ];

  return (
    <div className="h-auto bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Payment Section */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-1">Payment</h2>
          <p className="text-sm text-gray-500 mb-6">
            Please choose a payment method
          </p>

          <div className="space-y-4">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                onClick={() => setSelectedPayment(method.id)}
                className={`border rounded-lg p-4 cursor-pointer transition-all ${
                  selectedPayment === method.id
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        selectedPayment === method.id
                          ? "border-blue-500 bg-blue-500"
                          : "border-gray-300"
                      }`}
                    >
                      {selectedPayment === method.id && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                    <span className="font-medium">{method.name}</span>
                  </div>
                  <img
                    src={method.logo}
                    alt={method.name}
                    className="h-6 w-auto"
                  />
                </div>
                <p className="text-sm text-gray-600 ml-8">
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Shipping Section */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-1">Shipping</h2>
          <p className="text-sm text-gray-500 mb-6">
            Please choose a shipping company based on your region
          </p>

          <div className="space-y-4">
            {shippingMethods.map((method) => (
              <div
                key={method.id}
                onClick={() => {
                  setSelectedShipping(method.id);
                  setShippingCost(method.priceShipping);
                }}
                className={`border rounded-lg p-4 cursor-pointer transition-all ${
                  selectedShipping === method.id
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        selectedShipping === method.id
                          ? "border-blue-500 bg-blue-500"
                          : "border-gray-300"
                      }`}
                    >
                      {selectedShipping === method.id && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                    <span className="font-medium">{method.name}</span>
                  </div>
                  <img
                    src={method.logo}
                    alt={method.name}
                    className="h-6 w-auto object-contain"
                  />
                </div>
                <div className="ml-8 space-y-1">
                  <p className="text-sm text-gray-600">{method.delivery}</p>
                  <p className="text-sm text-gray-600">{method.cost}</p>
                  <p className={`text-sm font-medium ${method.insuranceColor}`}>
                    {method.insurance}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
