import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <Link
      to="Allproduct"
      className="underline cursor-pointer text-xs sm:text-sm md:text-base lg:text-lg xl:text-[20px] text-white font-normal text-center sm:text-left sm:mr-8 md:mr-16 lg:mr-20 xl:mr-24 leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-[40px] hover:no-underline transition-all"
    >
      Explore all Categoty
    </Link>
  );
};
export default Links;
