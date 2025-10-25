import { Link } from "react-router-dom";
import { memo, useContext, useRef } from "react";
import { CartContext } from "../../context/ContextCart";
import "./Slider.css" ;

const CardsColor = () => {
  const { Products } = useContext(CartContext);
  const sliderRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const handleMouseDown = (e) => {
    isDown.current = true;
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
  };

  const handleMouseUp = () => {
    isDown.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // سرعة السحب
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div className="ParentCards w-full h-auto bg-gray-50 py-6 sm:py-8 md:py-12 px-3 sm:px-4 md:px-6 flex flex-col">
      <div className="TitleParent w-full max-w-6xl mx-auto flex items-center justify-between mb-8 sm:mb-10 md:mb-14 px-2 sm:px-4 md:px-0">
        <span className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-900 underline">
          Top 100
        </span>
        <Link
          to="Allproduct"
          className="text-red-600 font-semibold text-sm sm:text-base md:text-lg hover:underline cursor-pointer"
        >
          View All
        </Link>
      </div>

      <div
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="flashSales w-full  max-w-[90rem] mx-auto flex gap-4 sm:gap-6 md:gap-8 px-2 sm:px-4 md:px-0 overflow-x-scroll scroll-smooth scrollbar-hide cursor-grab active:cursor-grabbing select-none"
      >
        {Products.map((items, idx) => (
          <div
            key={idx}
            className="Card flex flex-col justify-start items-start bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex-shrink-0 w-[100%] sm:w-[48%] md:w-[23%]"
          >
            <div className="ContainerImg flex justify-center items-center p-3 sm:p-4 md:p-5 w-full h-[250px] sm:h-[300px] md:h-[370px]">
              <img
                className="h-auto w-[60%] object-cover rounded-lg"
                src={`${items.Image.url}`}
                alt={items.name}
              />
            </div>

            <div className="container-footerFlash w-full p-3 sm:p-4 flex flex-col gap-2 items-start justify-start border-t border-gray-100">
              <div className="container-Brand w-full flex flex-col gap-1">
                <p className="w-full text-xs sm:text-sm md:text-[12px] font-bold text-gray-900 line-clamp-2">
                  {items.name}
                </p>
                <p className="text-xs sm:text-xs md:text-[10px] text-gray-600 line-clamp-3">
                  {items.description.slice(0, 20)}
                </p>
              </div>

              <div className="containerPrice w-full flex gap-2 sm:gap-3 flex-row items-center justify-start mt-2">
                <span className="text-sm sm:text-base md:text-[14px] font-bold text-red-500">
                  ${items.price}
                </span>
                <span className="text-xs sm:text-sm md:text-[12px] text-gray-500 line-through">
                  ${items.OldPrice}
                </span>
                <span className="text-xs sm:text-xs md:text-[9px] text-white font-bold px-1 py-1 rounded-[3px] bg-red-600">
                  {items.discount}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(CardsColor);
