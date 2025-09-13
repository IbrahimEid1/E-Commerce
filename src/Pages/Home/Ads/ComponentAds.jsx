import React from "react";

const ComponentAds = () => {
  return (
    <div className="w-full h-auto min-h-[50.9vh] sm:h-[45vh] md:h-[50vh] lg:h-[50.9vh] flex flex-col lg:flex-row justify-center lg:justify-evenly items-center lg:items-stretch rounded-md gap-4 lg:gap-0 p-4 lg:p-0">
      <div className="left w-full sm:w-[90%] md:w-[80%] lg:w-[40%] h-auto lg:h-[80%] flex flex-col sm:flex-row rounded-lg lg:rounded-none overflow-hidden">
        <div
          className="flex flex-col gap-2 sm:gap-3 md:gap-4 w-full sm:w-[50%] h-auto sm:h-[100%] justify-center items-center font-bold py-8 sm:py-6 md:py-8 px-4 sm:px-2 md:px-4"
          style={{ backgroundColor: "rgb(191,46,59,1)" }}
        >
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[36px] w-full sm:w-[270px] h-[auto] text-white leading-tight sm:leading-7 md:leading-8 lg:leading-9 xl:leading-[46px] text-center sm:text-left">
            Never-Ending <br /> Summer
          </h1>
          <h6 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[26px] text-white leading-5 sm:leading-6 md:leading-7 lg:leading-8 xl:leading-[36px] font-normal text-center sm:text-left sm:-translate-x-2 md:-translate-x-4 lg:-translate-x-6">
            Throwback Shirts &{" "}
            <span className="hidden sm:inline">
              <br />
            </span>
            all-day dressed
          </h6>
          <p className="underline cursor-pointer text-xs sm:text-sm md:text-base lg:text-lg xl:text-[20px] text-white font-normal text-center sm:text-left sm:mr-8 md:mr-16 lg:mr-20 xl:mr-24 leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-[40px] hover:no-underline transition-all">
            Explore all Categoty
          </p>
        </div>
        <div
          className="w-full sm:w-[50%] h-32 sm:h-[100%] min-h-[120px]"
          style={{ backgroundColor: "rgb(189,32,217,0.91)" }}
        ></div>
      </div>

      <div className="right w-full sm:w-[90%] md:w-[80%] lg:w-[40%] h-auto lg:h-[80%] flex flex-col sm:flex-row rounded-lg lg:rounded-none overflow-hidden">
        <div
          className="flex flex-col gap-2 sm:gap-3 md:gap-4 w-full sm:w-[50%] h-auto sm:h-[100%] justify-center items-center font-bold py-8 sm:py-6 md:py-8 px-4 sm:px-2 md:px-4"
          style={{ backgroundColor: "rgb(29,81,89,1)" }}
        >
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[36px] w-full sm:w-[270px] h-[auto] text-white leading-tight sm:leading-7 md:leading-8 lg:leading-9 xl:leading-[46px] text-center sm:text-left">
            The Most <br /> Famous sport <br /> brands
          </h1>
          <h6 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[26px] text-white leading-5 sm:leading-6 md:leading-7 lg:leading-8 xl:leading-[36px] font-normal text-center sm:text-left sm:mr-2 md:mr-4 lg:mr-6 xl:mr-7">
            Get in gym essentials
          </h6>
          <p className="underline cursor-pointer text-xs sm:text-sm md:text-base lg:text-lg xl:text-[20px] text-white font-normal text-center sm:text-left sm:mr-8 md:mr-16 lg:mr-20 xl:mr-24 leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-[40px] hover:no-underline transition-all">
            Explore all Categoty
          </p>
        </div>
        <div
          className="w-full sm:w-[50%] h-32 sm:h-[100%] min-h-[120px]"
          style={{ backgroundColor: "rgb(168,63,63,0.9)" }}
        ></div>
      </div>
    </div>
  );
};
export default ComponentAds;
