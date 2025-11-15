import { Link } from "react-router-dom";
import { memo, useContext } from "react";
import { CartContext } from "../../context/ContextCart";
import { Toaster } from "react-hot-toast";
import { ShoppingCart } from "lucide-react"; // Import a cart icon (assuming you use a library like lucide-react)
import { useApiCardsHome } from "../../hooks/ApiCardsHome";
import { ProductSkeleton } from "../Category/MainContent";

const Cards = () => {
  const { AddToCart } = useContext(CartContext);
const {data , isLoading } =useApiCardsHome()
 const getRandomProducts = (arr, count) => {
  if (!Array.isArray(arr)) return []; // حماية
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
  const resultRandom = getRandomProducts(data?.data , 4);

  return (
    <div className="ParentCards w-full bg-gray-50 py-12 px-4 sm:px-6 flex flex-col">
      <div className="TitleParent w-full max-w-[90rem]  mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 sm:mb-14 gap-4">
        <span className="text-2xl sm:text-3xl font-medium text-gray-900">
          Flash Sales
        </span>
        <Link
          to="Allproduct"
          className="text-red-600 font-semibold text-base sm:text-lg hover:underline cursor-pointer"
        >
          View All
        </Link>
      </div>
      <div className="flashSales w-[100%] max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {isLoading ?[...Array(4)].map((_,index)=> <ProductSkeleton key={index}/> )  : resultRandom.map((items, idx) => (
          // 1. Add 'group' class to the parent Card div
          <div
            className="Card flex flex-col justify-start items-start bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group relative" // Added 'group' and 'relative'
            key={idx}
          >
            {/* ... (Existing code for Title, Image, and Footer remains here) ... */}

            <div className="containerTitle w-full p-4 flex flex-col items-center bg-red-50 border-b border-gray-200">
              <p className="w-full text-center text-md font-semibold text-gray-400">
                {items.name}
              </p>
            </div>
            <div className="ContainerImg flex justify-start p-5 w-[100%] h-[270px]">
              <img
                src={`${items.Image.url}`}
                className="w-[100%] h-[100%] object-contain"
                alt={items.name} // Always add alt text for images
              />
            </div>
            <div className="container-footerFlash w-full p-4 flex flex-col gap-2 items-start justify-start border-t border-gray-100">
              <div className="container-Brand w-full flex flex-col gap-1">
                <p className="w-full text-lg font-bold text-gray-900">
                  {items.name}
                </p>
                <p className="text-sm text-gray-600">{items.name}</p>
                <div className="flex items-center">
                  <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                  <span className="text-xs text-gray-500 ml-1"> 45</span>
                </div>
              </div>
              <div className="containerPrice w-full flex gap-3 flex-row items-center justify-start mt-2">
                <span className="text-lg font-bold text-red-500">
                  {items.price}$
                </span>
                <span className="text-md text-gray-500 line-through">
                  {items.OldPrice} $
                </span>
                <span className="text-[9px] text-white font-bold p-1 rounded-[3px] bg-red-600">
                  {items.discount} %
                </span>
              </div>
            </div>

            {/* 2. Replace the 'btn' div and 'button' with the new overlay */}
            <div
              className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-30 z-10" // Overlay that is hidden by default
              onClick={() => {
                AddToCart(items);
                // Note: The Toaster component should generally be rendered once at a higher level,
                // not inside an onClick handler. You just need the AddToCart logic here.
                // <Toaster position="bottom-center" reverseOrder={true} />;
              }}
              aria-label={`Add ${items.name} to cart`} // Accessibility
            >
              <div className="p-3 rounded-full bg-white text-blue-600 hover:bg-blue-100 transition-colors cursor-pointer">
                <ShoppingCart size={24} /> {/* Icon */}
              </div>
            </div>
            {/* End of new overlay */}
          </div>
        ))}
        
      </div>
      {/* 3. Render Toaster once, typically at the end of the component or layout */}
      <Toaster position="bottom-center" reverseOrder={true} />
    </div>
  );
};
export default memo(Cards);