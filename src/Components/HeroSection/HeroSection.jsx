import { useNavigate } from "react-router-dom";
import right from "../../assets/left.png";
import left from "../../assets/snapedit_1757551813844.jpg";
import Buttons from "../../UI/Buttons";
import { memo } from "react";
const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full h-[460px] md:h-[460px] sm:h-[300px] xs:h-[250px] flex md:flex-row flex-col overflow-hidden m-0 p-0">
      <div
        className="w-full md:w-[40%] h-1/2 md:h-full bg-cover bg-center flex  md:justify-end justify-center items-center"
        style={{ backgroundImage: `url(${right})` }}
      >
        <div className="Offer bg-white w-[240px] md:w-[240px] sm:w-[200px] xs:w-[180px] h-[163px] md:h-[163px] sm:h-[140px] xs:h-[120px] flex justify-center flex-col md:translate-x-28 sm:translate-x-0 xs:translate-x-0 translate-x-0">
          <div className="content w-[100%] h-[100%] flex flex-col justify-center items-center pr-4">
            <p className="!text-xl md:!text-xl sm:!text-lg xs:!text-base !text-black !font-bold ">
              Summer Essentials
            </p>
            <p className="!text-red-700 !text-xl md:!text-xl sm:!text-lg xs:!text-base !font-bold">
              20% off
            </p>
          </div>
          <div className="dateOffer w-[100%] h-[55px] md:h-[55px] sm:h-[45px] xs:h-[40px] text-white bg-black flex justify-center items-center text-sm md:text-base">
            19 JUL-30 JUL
          </div>
        </div>
      </div>

      <div
        className="w-full md:w-[60%] h-1/2 md:h-full bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: `url(${left})` }}
      >
        <div className="container-title flex flex-col justify-center items-center text-white gap-4 md:gap-4 sm:gap-3 xs:gap-2 px-4">
          <h1 className="text-4xl md:text-4xl sm:text-2xl xs:text-xl text-white text-center">
            Kimonos, Caftans & Pareos
          </h1>
          <h3 className="!text-2xl md:!text-2xl sm:!text-lg xs:!text-base text-white text-center">
            Poolside glam included From $4.99
          </h3>
          <Buttons
            text={"Shop Now"}
            onClick={() => {
              navigate("/Allproduct");
            }}
            className={
              "w-[243px] md:w-[243px] sm:w-[200px] xs:w-[180px] h-[56px] md:h-[56px] sm:h-[48px] xs:h-[44px] bg-blue-500 rounded-md text-xl md:text-xl sm:text-lg xs:text-base text-white flex items-center justify-center"
            }
          ></Buttons>
        </div>
      </div>
    </section>
  );
};
export default memo(HeroSection);
