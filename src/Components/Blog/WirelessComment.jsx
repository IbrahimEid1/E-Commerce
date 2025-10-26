import React from "react";
import Image from "../../assets/Quote.png";
import Nina from "../../assets/Nina.jpg";

const WirelessComment = () => {
  const items = Array.from({ length: 4 });
  return (
    
    <section
      className="flex flex-col h-auto md:h-[87vh] w-full md:w-[296px] p-4 md:p-3 rounded-lg md:rounded-none "
      style={{ backgroundColor: "#9DB8C9" }}
    >
      {items.map((_, i) => (
        <div key={i} className="container flex flex-col gap-1 p-3 md:p-3">
          <div className="flex flex-col gap-3">
            <div className="flex items-center">
              <img src={Image} alt="Quote icon" className="w-5 h-5 md:w-6 md:h-6" />
              <p className="-translate-x-3 md:-translate-x-4 text-base md:text-xl text-white font-bold">
                WIRELESS Earbuds
              </p>
            </div>
            <p className="text-sm md:text-[16px] text-white leading-6 font-normal">
              "I've been using the XYZ Wireless Earbuds for a few weeks now, and they've completely..."
            </p>
            <div className="flex items-center gap-2">
              <img
                src={Nina}
                alt="Nina"
                className="rounded-full object-cover w-[38px] h-[38px] md:w-[42px] md:h-[42px] flex-shrink-0"
              />
              <div className="flex flex-col text-xs md:text-sm text-white">
                <p className="font-medium">Nina Martinaz</p>
                <p className="opacity-90">Programmer</p>
              </div>
            </div>
          </div>
          <hr className="border-white opacity-30 mt-2" />
        </div>
        ))}
    </section>

  );
};

export default WirelessComment;