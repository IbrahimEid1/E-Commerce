import React from "react";
import icon1 from "../../assets/012-laundry.png";
import icon2 from "../../assets/013-iron.png";
import icon3 from "../../assets/026-test.png";
import icon4 from "../../assets/030-construction.png";
import icon5 from "../../assets/040-clothes.png";
import icon6 from "../../assets/sd.png";
import { ArrowUp } from "lucide-react";

const ContentProductDetails = () => {
  const ArrayList = [
    "Machine wash at max. 30ºC/86ºF with short spin cycle",
    "Iron at a maximum of 110ºC/230ºF",
    "Do not dry clean",
    "Do not tumble dry",
    "Wash inside out",
    "Wash separately",
  ];
  const ArrayIcon = [icon1, icon2, icon3, icon4, icon5, icon6];

  return (
    <div className="w-full min-h-[456px] flex flex-col justify-center items-center font-lato gap-4 px-4 sm:px-6 lg:px-10">
      <div className="w-full flex flex-col lg:flex-row h-auto lg:h-[90%] gap-8">
        {/* Right Container */}
        <div className="containerRight w-full lg:w-1/2 h-auto flex flex-col gap-6">
          <div className="w-full flex flex-col justify-start">
            <h1 className="text-[18px] font-bold leading-[25px]">
              Product Details
            </h1>
            <p className="text-[14px] leading-5 font-normal text-zinc-600 w-full">
              Short dress with a plunging V-neckline and tie detail. Wide
              sleeves falling below the elbow. Contrast <br /> bead details.
              Invisible back zip fastening.
            </p>
          </div>

          <div className="w-full flex flex-col gap-4">
            <h1 className="text-[18px] font-bold leading-[25px] gap-3">
              Product Details
            </h1>
            <ul className="List flex flex-col gap-3 ml-5 text-zinc-600 capitalize">
              {[
                "Length | Regular",
                "Pattern | Floral",
                "Size | 38",
                "Fit | Regular fit",
                "Age group | Adult",
                "Leg opening | Wide leg",
                "Sleeve length | Long sleeve",
                "Package contents | 2 pcs",
              ].map((item, index) => (
                <li
                  className="text-sm font-normal list-disc break-words"
                  key={index}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Left Container */}
        <div className="w-full lg:w-1/2 h-auto flex flex-col gap-10 lg:gap-16">
          <div className="w-full flex flex-col justify-start">
            <h1 className="text-[18px] font-bold leading-[25px]">
              Composition
            </h1>
            <p className="text-[14px] leading-5 font-normal text-zinc-600">
              We work with monitoring programmes to ensure compliance with our
              social, environmental and <br /> health and safety standards for
              our products. To assess compliance, we have developed a programme{" "}
              <br />
              of audits and continuous improvement plans. <br /> OUTER SHELL 90%{" "}
              <br />
              cotton10% linen
            </p>
          </div>

          <div className="w-full flex flex-col gap-6">
            <h1 className="text-[18px] font-bold leading-[25px] gap-3">
              Care instructions
            </h1>
            <ul className="List flex flex-col gap-4 text-zinc-600 capitalize">
              {ArrayList.map((item, index) => (
                <li
                  className="text-sm font-normal list-disc flex gap-2 flex-row items-center"
                  key={index}
                >
                  <img
                    className="w-5 h-[15px] object-contain"
                    src={ArrayIcon[index]}
                    alt={`icon-${index}`}
                  />
                  <span className="break-words">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Show Less */}
      <div className="w-full h-auto flex justify-center flex-row gap-2 mt-4">
        <ArrowUp size={20} className="mt-1" />
        <button className="border-none bg-transparent uppercase text-sm sm:text-base">
          Show Less
        </button>
      </div>
    </div>
  );
};

export default ContentProductDetails;
