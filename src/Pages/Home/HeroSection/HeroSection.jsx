import right from "../../../assets/left.png";
import left from "../../../assets/snapedit_1757551813844.jpg";
import Buttons from "../../../UI/Buttons";
const HeroSection = () => {
  return (
    <section className="w-full h-[460px] flex overflow-hidden m-0 p-0">
      <div
        className="w-[40%] h-full bg-cover bg-center flex justify-end items-center"
        style={{ backgroundImage: `url(${right})` }}
      >
        <div className="Offer bg-white w-[240px] h-[163px] flex justify-center flex-col  translate-x-28">
          <div className="content w-[100%] h-[100%] flex flex-col justify-center items-center pr-4">
            <p className="!text-xl !text-black !font-bold ">
              Summer Essentials
            </p>
            <p className="!text-red-700 !text-xl !font-bold ">20% off</p>
          </div>
          <div className="dateOffer w-[100%] h-[55px] text-white bg-black  flex justify-center items-center">
            19 JUL-30 JUL
          </div>
        </div>
      </div>

      <div
        className="w-[60%] h-full bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: `url(${left})` }}
      >
        <div className="container-title flex flex-col justify-center items-center text-white gap-4">
          <h1 className="text-4xl text-white ">Kimonos, Caftans & Pareos</h1>
          <h3 className="!text-2xl text-white">
            Poolside glam included From $4.99
          </h3>
          <Buttons
            text={"Shop Now"}
            className={
              "w-[243px] h-[56px] bg-blue-500 rounded-md text-xl text-white flex items-center justify-center"
            }
          ></Buttons>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
