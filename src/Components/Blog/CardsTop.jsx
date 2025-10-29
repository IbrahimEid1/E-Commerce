import React from "react";
import Image from "../../assets/Woman.png";
import ImageTwo from "../../assets/Mon.jpg"
import { MessageSquare } from "lucide-react";

const CardsTop = () => {
  return (
    <section className="w-full md:w-[50%] h-auto md:h-[87vh] border border-gray-300 rounded-lg md:rounded-none overflow-hidden">
      <div className="container flex flex-col w-full h-full gap-3 md:gap-5">
        <div
          className="cardtop w-full h-64 md:h-1/2 bg-red-500 flex justify-center items-end px-4 pb-6 md:pb-8"
          style={{
            backgroundImage: `url(${Image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 className="text-base md:text-xl text-white font-medium text-center leading-tight md:leading-normal drop-shadow-lg">
            woman with a blonde <br /> hair in a bonnet hood dressed <br /> on her head
          </h1>
        </div>
        <div className="btm flex flex-col pb-4 md:pb-0">
          <img 
            src={ImageTwo} 
            alt="Anker power bank" 
            className="w-full h-48 md:h-auto object-cover"
          />
          <div className="px-3 md:px-2 py-2">
            <p className="text-yellow-600 text-xs md:text-sm py-1 md:py-2 uppercase">tech</p>
            <p className="text-gray-900 text-sm md:text-[16px] leading-5 md:leading-6 font-bold mb-2">
              Anker 325 power bank
            </p>
            <p className="text-gray-600 text-xs md:text-[14px] leading-5 md:leading-6">
              Anker 325 power bank, 20000mAh external battery PowerIQ technology USB-C port, enormous energy density, compatible with iPhone, Samsung Galaxy, iPad and more...
            </p>
          </div>
          <div className="flex mt-1 px-3 md:px-2 text-zinc-400 items-center">
            <p className="text-[11px] md:text-[12px] leading-5 mr-2">4 hours ago</p>
            <MessageSquare width={14} className="fill-zinc-500 text-white flex-shrink-0" /> 
            <p className="text-[11px] md:text-[12px] ml-1">10</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardsTop;