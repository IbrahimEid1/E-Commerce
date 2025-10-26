import React from "react";
import image from "../../assets/04228e25b69f8636169037d9264db618d27d01bb.jpg";
import imageTwo from "../../assets/blonde.jpg";
import imageThree from "../../assets/stylish.jpg";
import imageFour from "../../assets/coll.jpg";


const Gallery = () => {
  return (
   <div className="w-full flex justify-center items-center py-6 md:py-10 bg-gray-50">
      <div className="flex flex-col md:flex-row w-full md:w-[90%] gap-4 md:gap-6 px-4 md:px-0">
        {/* الصورة الكبيرة */}
        <div
          className="flex-1 h-64 md:h-[600px] shadow-lg rounded-xl"
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: "50% 50%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* التلات كروت الصغيرين */}
        <div className="flex flex-row md:flex-col justify-between w-full md:w-[25%] gap-4 md:gap-0">
          <div
            className="w-1/3 md:w-full h-32 md:h-[180px] rounded-xl shadow-md"
            style={{
              backgroundImage: `url(${imageTwo})`,
              backgroundPosition: "50% 20%",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          <div
            className="w-1/3 md:w-full h-32 md:h-[180px] rounded-xl shadow-md"
            style={{
              backgroundImage: `url(${imageThree})`,
              backgroundPosition: "50% 50%",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          <div
            className="w-1/3 md:w-full h-32 md:h-[180px] rounded-xl shadow-md"
            style={{
              backgroundImage: `url(${imageFour})`,
              backgroundPosition: "50% 50%",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;