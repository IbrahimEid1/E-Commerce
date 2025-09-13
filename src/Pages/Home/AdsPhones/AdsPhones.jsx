import { ChevronLeft, ChevronRight } from "lucide-react";
import phone from "../../../assets/ImagePhones.png";

const AdsPhones = () => {
  return (
    <div
      className="w-full h-auto min-h-[20.5vh] sm:h-[25vh] md:h-[30vh] lg:h-[20.5vh] flex flex-col lg:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-5 py-4 sm:py-6 lg:py-0 px-4 sm:px-6 lg:px-0"
      style={{ backgroundColor: "rgb(247,221,208,1)" }}
    >
      <div className="w-full lg:w-[50%] h-auto lg:h-[100%] flex flex-col sm:flex-row justify-center lg:justify-evenly items-center gap-4 sm:gap-6 lg:gap-0">
        <div className="flex gap-4 order-2 sm:order-1">
          <button className="p-1 sm:p-2 bg-transparent rounded-full hover:bg-gray-300 transition-colors">
            <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
          </button>
        </div>
        <div className="containerZTitle text-center sm:text-left order-1 sm:order-2 px-2 sm:px-0">
          <h1
            className="text-xl sm:text-2xl md:text-3xl lg:text-[26px] uppercase leading-tight sm:leading-5 font-bold"
            style={{ color: "rgb(70,93,107,1)" }}
          >
            MagSafe
          </h1>
          <h6 className="text-sm sm:text-base md:text-lg lg:text-[20px] leading-5 sm:leading-6 md:leading-7 text-zinc-700 mt-2 sm:mt-3 md:mt-4 max-w-md lg:max-w-none">
            Snap on a magnetic case, wallet, or both. And get faster{" "}
            <span className="hidden sm:inline">
              <br />
            </span>
            wireless charging.
          </h6>
        </div>
      </div>
      <div className="containerPhones w-full lg:w-[50%] h-auto lg:h-[100%] flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 sm:gap-6 lg:space-x-48 lg:gap-0">
        <img
          src={phone}
          className="w-[60%] sm:w-[50%] md:w-[40%] lg:w-[60%] h-auto max-h-[200px] sm:max-h-[250px] md:max-h-[300px] lg:h-[100%] object-contain overflow-hidden order-1 sm:order-1"
          alt="MagSafe Phone"
        />
        <div className="flex gap-4 order-2 sm:order-2">
          <button className="p-1 sm:p-2 bg-transparent rounded-full hover:bg-gray-300 transition-colors">
            <ChevronRight size={20} className="sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default AdsPhones;
