import { ProductsColor } from "./ProductsColor";
const CardsColor = () => {
  return (
    <div className="ParentCards w-[100%] h-[auto] bg-gray-50 py-6 sm:py-8 md:py-12 px-3 sm:px-4 md:px-6 flex justify-start items-start flex-col">
      <div className="TitleParent w-[100%] max-w-6xl mx-auto flex items-center justify-between mb-8 sm:mb-10 md:mb-14 px-2 sm:px-4 md:px-0">
        <span className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-900 -translate-x-0 sm:-translate-x-10 md:-translate-x-28 underline">
          Top 100
        </span>
        <button className="text-red-600 font-semibold text-sm sm:text-base md:text-lg hover:underline cursor-pointer translate-x-0 sm:translate-x-8 md:translate-x-24">
          View All
        </button>
      </div>

      <div className="flashSales w-[100%] max-w-[90rem] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-2 sm:px-4 md:px-0">
        {ProductsColor.map((items, idx) => (
          <div
            className="Card flex flex-col justify-start items-start bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
            key={idx}
          >
            <div className="ContainerImg flex justify-start p-3 sm:p-4 md:p-5 w-[100%] h-[250px] sm:h-[300px] md:h-[370px]">
              <img
                className="w-[100%] h-[100%] object-cover rounded-lg"
                style={items.bgColor}
              />
            </div>

            <div className="container-footerFlash w-full p-3 sm:p-4 flex flex-col gap-2 items-start justify-start border-t border-gray-100">
              <div className="container-Brand w-full flex flex-col gap-1">
                <p className="w-full text-xs sm:text-sm md:text-[12px] font-bold text-gray-900 line-clamp-2">
                  {items.title}
                </p>
                <p className="text-xs sm:text-xs md:text-[10px] text-gray-600 line-clamp-3">
                  {items.description}
                </p>
                <div className="flex items-center mt-1">
                  <div className="flex text-yellow-400">
                    <img
                      src={items.star}
                      alt="star"
                      className="w-3 h-3 sm:w-4 sm:h-4"
                    />
                    <img
                      src={items.star}
                      alt="star"
                      className="w-3 h-3 sm:w-4 sm:h-4"
                    />
                    <img
                      src={items.star}
                      alt="star"
                      className="w-3 h-3 sm:w-4 sm:h-4"
                    />
                    <img
                      src={items.star}
                      alt="star"
                      className="w-3 h-3 sm:w-4 sm:h-4"
                    />
                  </div>
                  <span className="text-xs text-gray-500 ml-1">(54)</span>
                </div>
              </div>

              <div className="containerPrice w-full flex gap-2 sm:gap-3 flex-row items-center justify-start mt-2">
                <span className="text-sm sm:text-base md:text-[14px] font-bold text-red-500">
                  {items.price}
                </span>
                <span className="text-xs sm:text-sm md:text-[12px] text-gray-500 line-through">
                  {items.oldPrice}
                </span>
                <span className="text-xs sm:text-xs md:text-[9px] text-white font-bold px-1 py-1 rounded-[3px] bg-red-600">
                  {items.discount}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CardsColor;
