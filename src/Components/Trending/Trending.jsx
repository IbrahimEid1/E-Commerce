import { Link } from "react-router-dom";
import Buttons from "../../UI/Buttons";
import { useTrending } from "../../hooks/useTrending";
import { v4 as uuidv4 } from 'uuid';

const Trending = () => {
  const {data}= useTrending()
  
  return (
    <div className="ParentTrending w-full min-h-[70vh] font-lato px-4">
      <div className="TitleParent w-full max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 sm:mb-14 gap-4">
        <span className="text-2xl sm:text-3xl font-medium text-gray-900">
          Trending must-haves{" "}
        </span>
        <Link
          to="Allproduct"
          className="text-red-600 font-semibold text-base sm:text-lg hover:underline cursor-pointer"
        >
          View All
        </Link>
      </div>

      <div className="Container-Cards w-full max-w-[85rem] mx-auto flex flex-wrap justify-center gap-11 ">
        {data?.map((product) => (
          <div
            key={uuidv4()}
            className="Card w-full sm:w-[48%] md:w-[31%] h-[450px] flex flex-col justify-between items-center rounded-md"
          >
            <div className="w-full h-[85%] flex object-cover">
              <img src={`${product.Image.url}`} alt="" className="h-auto object-cover" />
            </div>
            <div
              className="Container-Footer w-full h-20 flex justify-between items-center px-4"
              style={{ backgroundColor: "rgba(38,38,38,1)" }}
            >
              <div className="text text-gray-200 flex flex-col justify-between w-[60%] text-[14px]">
                <p className="font-semibold">moha</p>
                <p className="text-zinc-400 mt-2 text-[12px]">
                 dsadas
                </p>
              </div>
              <Buttons
                className="text-white text-[14px] md:text-[16px] border border-zinc-500 rounded-md w-[120px] md:w-[146px] h-[40px] md:h-[44px]"
                text={"$89 Shop Now"}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Trending;
