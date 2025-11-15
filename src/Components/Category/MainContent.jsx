import React, { memo, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/ContextCart";
import Heart from "../../UI/Heart";
import Star from "../../UI/Stars";
import { ShoppingCart, RefreshCw } from "lucide-react";

// Skeleton Component
export const ProductSkeleton = () => (
  <div className="Card flex flex-col bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 animate-pulse">
    {/* صورة skeleton */}
    <div className="w-full h-[280px] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
      <div className="w-32 h-32 bg-gray-300 rounded-lg"></div>
    </div>
    
    {/* محتوى skeleton */}
    <div className="flex flex-col flex-1 p-4 space-y-3">
      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      <div className="h-3 bg-gray-200 rounded w-full"></div>
      <div className="h-3 bg-gray-200 rounded w-2/3"></div>
      
      <div className="flex items-center gap-1 pt-2">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-4 h-4 bg-gray-200 rounded"></div>
        ))}
      </div>
      
      <div className="flex items-center gap-2 pt-2">
        <div className="h-6 bg-gray-200 rounded w-20"></div>
        <div className="h-4 bg-gray-200 rounded w-16"></div>
      </div>
      
      <div className="h-11 bg-gray-200 rounded-xl mt-auto"></div>
    </div>
  </div>
);

const MainContent = () => {
  const { AddToCart, AddToFav, Products } = useContext(CartContext);

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen py-8">
      {/* الجريد الخاصة بالمنتجات */}
      <div className="flashSales w-[100%] max-w-[75rem] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-4 sm:px-6">
        {Products.length > 0 ? (
          Products.map((items, index) => (
            <div
              className="Card group relative flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200"
              key={`${items.id}-${index}`}
            >
              {/* Badge الخصم */}
              {items.discount && (
                <div className="absolute top-3 left-3 z-10 bg-gradient-to-r from-red-500 via-red-600 to-pink-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  -{items.discount}%
                </div>
              )}

              {/* أيقونة القلب */}
              <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div
                  onClick={() => AddToFav(items)}
                  className="bg-white/95 backdrop-blur-sm p-2.5 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 border border-gray-100"
                  aria-label="Add to favorites"
                >
                  <Heart className="w-5 h-5" />
                </div>
              </div>

              {/* صورة المنتج */}
              <Link
                to={`/Allproduct/${items.documentId}`}
                className="relative w-full h-[280px] flex items-center justify-center p-6 bg-gradient-to-br from-gray-50 via-white to-gray-50 group-hover:from-blue-50 group-hover:via-white group-hover:to-blue-50 transition-all duration-500"
              >
                <img
                  src={items.Image?.url}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  alt={items.name}
                  loading="lazy"
                />
              </Link>

              {/* معلومات المنتج */}
              <div className="flex flex-col flex-1 p-4 space-y-3">
                {/* اسم المنتج */}
                <Link to={`/Allproduct/${items.documentId}`}>
                  <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 hover:text-blue-600 transition-colors duration-300 min-h-[40px] leading-tight">
                    {items.name}
                  </h3>
                </Link>

                {/* الوصف */}
                <p className="text-xs text-gray-500 line-clamp-2 min-h-[32px] leading-relaxed">
                  {items.description}
                </p>

                {/* التقييم */}
                <div className="flex items-center gap-1">
                  <div className="flex text-yellow-400">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                  <span className="text-xs text-gray-500 ml-1 font-medium">
                    ({items.rate || "4.5"})
                  </span>
                </div>

                {/* السعر */}
                <div className="flex items-center gap-2 pt-1">
                  <span className="text-xl font-bold text-gray-900">
                    ${items.price}
                  </span>
                  {items.OldPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      ${items.OldPrice}
                    </span>
                  )}
                </div>

                {/* زر الإضافة للسلة */}
                <button
                  onClick={() => AddToCart(items)}
                  className="w-full mt-auto flex items-center justify-center gap-2.5 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white py-3.5 rounded-xl font-medium text-sm shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group/btn"
                >
                  <ShoppingCart className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                  <span> Add To Cart</span>
                </button>
              </div>
            </div>
          ))
        ) : (
          // Skeleton Loading
          <>
            {[...Array(8)].map((_, index) => (
              <ProductSkeleton key={index} />
            ))}
          </>
        )}
      </div>

      {/* زر Load More المحسن */}
      {Products.length > 0 && (
        <div className="w-full flex justify-center mt-12 mb-8 px-4">
        </div>
      )}
    </div>
  );
};

export default memo(MainContent);