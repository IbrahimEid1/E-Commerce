import { useState } from "react";
import { Star } from "lucide-react";
import CustomerFedback from "./CustomerFedback";
export default function Reviews() {
  const [reviews] = useState({
    average: 4.8,
    totalReviews: 10,
    totalRatings: 125,
    breakdown: {
      5: 75,
      4: 50,
      3: 30,
      2: 20,
      1: 10,
    },
  });

  return (
    <>
      <div className="max-w-7xl mx-auto p-6 bg-white rounded-2xl shadow-md grid grid-cols-1 md:grid-cols-2   ">
        <div className="flex flex-row items-center justify-evenly">
          <div>
            <h2 className="text-gray-700 font-semibold">Total review rate</h2>
            <p className="text-sm text-gray-500">
              Average rating ({reviews.totalReviews} Reviews &{" "}
              {reviews.totalRatings} Ratings)
            </p>
            <div className="flex items-center gap-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.round(reviews.average)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
              <span className="ml-2 text-gray-600 font-medium">
                {reviews.average}/5
              </span>
            </div>
            <button className="mt-3 px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-100 transition">
              Write a customer review
            </button>
          </div>
        </div>

        <div className="mt-6 space-y-2">
          {[5, 4, 3, 2, 1].map((star) => (
            <div key={star} className="flex items-center gap-2">
              <span className="w-12 text-sm text-gray-600">{star} Stars</span>
              <div className="flex-1 h-2 bg-gray-200 rounded-full ">
                <div
                  className="h-full bg-blue-500"
                  style={{ width: `${reviews.breakdown[star]}%` }}
                ></div>
              </div>
              <span className="w-10 text-sm text-gray-600">
                {reviews.breakdown[star]}%
              </span>
            </div>
          ))}
        </div>
      </div>

      <CustomerFedback />
    </>
  );
}
