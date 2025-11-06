import React from "react";
import { AlertCircle, Info } from "lucide-react";
import img from "../../assets/n.png"
import { useNavigate } from "react-router-dom";
const NoSearchResults = (  ) => {
  const navigate = useNavigate()
  return ( 
    <div className="w-full max-w-5xl mx-auto p-6">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Left Side - Image */}
        <div className="flex-shrink-0 w-full md:w-80">
            <img 
              src={img} 
              alt="No results found" 
              className="w-full h-auto"
            />
        </div>

        {/* Right Side - Content */}
        <div className="flex-1 w-full">
          <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6">
            {/* No Results Message */}
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Your Cart is Empty
            </h2>

            {/* Warning Box */}
            <div className="flex items-start gap-3 mb-3 p-3 bg-orange-50 border border-orange-200 rounded">
              <AlertCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700 text-sm">
            Looks like you haven't added anything to your cart yet.
              </p>
            </div>

            {/* Info Box */}
            <div className="flex items-start gap-3 p-3 bg-blue-50 border border-blue-300 rounded mb-4">
              <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700 text-sm">
            Please select products to continue to the next step
              </p>
            </div>

            {/* Filter Button */}
            <div className="flex justify-center">
              <button onClick={()=>navigate("/allproduct")} className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-5 py-2 rounded transition-colors">
                              Start Shopping

              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoSearchResults;