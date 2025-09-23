import React, { useState } from "react";
import { Check } from "lucide-react";
import logo3 from "../../assets/b6a0443def60ee05c9501efffe3544bee6560d25.gif";
import logo2 from "../../assets/5dae0dc5ba0350bc45bb8e052ffd83493be22c5d.png";
import logo1 from "../../assets/c3cd6b27d44d2742024d3856494f8f50abda2b34.png";
import Paypal from "../../../public/paypal.png";
import MasterCard from "../../../public/mastercard.png";
import Bitcoin from "../../../public/Bitcoin.png";

const ShippingPayment = () => {
  const [selectedRegion, setSelectedRegion] = useState("Sydney");

  const shippingOptions = [
    {
      company: "AUSFF",
      logo: logo1,
      cost: "Free",
      deliveryTime: "14-21 days",
      insurance: "Unavailable",
    },
    {
      company: "Race Couriers",
      logo: logo2,
      cost: "$15",
      deliveryTime: "7-14 days",
      insurance: "Available",
      hasInsurance: true,
    },
    {
      company: "Transco Cargo",
      logo: logo3,
      cost: "$21",
      deliveryTime: "3-7 days",
      insurance: "Available",
      hasInsurance: true,
    },
  ];

  const paymentMethods = [
    { name: "PayPal", logo: Paypal },
    { name: "Mastercard", logo: MasterCard },
    { name: "Bitcoin", logo: Bitcoin },
  ];

  return (
    <div className=" w-[100%]  p-6 bg-white ">
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Shipping</h2>
        <p className="text-sm text-gray-600 mb-4">
          Calculate the shipping cost by region
        </p>

        <div className="mb-6">
          <label className="block text-sm text-gray-700 mb-2">
            Shipping to
          </label>
          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="w-80 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="Sydney">Sydney</option>
            <option value="Melbourne">Melbourne</option>
            <option value="Brisbane">Brisbane</option>
          </select>
        </div>

        <div className="overflow-hidden border border-gray-200 rounded-lg w-[100%] flex justify-center ">
          <table className="w-[70%]">
            <thead className="bg-gray-50 ">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Shipping Company
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Shipping Cost
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Estimated Delivery Time
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Packet Insurance
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {shippingOptions.map((option, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-4 whitespace-nowrap flex items-center gap-3">
                    <img
                      className="w-[150px] h-[38px] object-contain"
                      src={option.logo}
                      alt={option.company}
                    />
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                    {option.cost}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                    {option.deliveryTime}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {option.hasInsurance ? (
                        <>
                          <div className="w-4 h-4 bg-blue-600 rounded flex items-center justify-center mr-2">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-sm text-gray-900">
                            {option.insurance}
                          </span>
                        </>
                      ) : (
                        <span className="text-sm text-gray-500">
                          {option.insurance}
                        </span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Payment</h2>
        <p className="text-sm text-gray-600 mb-4">
          Payment methods supported with our platform
        </p>

        <div className="flex items-center space-x-6">
          {paymentMethods.map((method, index) => (
            <img
              key={index}
              src={method.logo}
              alt={method.name}
              className="h-8 object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShippingPayment;
