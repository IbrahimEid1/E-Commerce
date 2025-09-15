import { Link } from "react-router-dom";
import Home from "../Home/Home";
import { ChevronRightIcon } from "lucide-react";

const NavCat = () => {
  return (
    <div className="w-[100%] h-[1vh] bg-white flex justify-center items-center mt-8">
      <div className="container w-[100%] h-[100%]  flex">
        <Link to="/" className="pr-3 text-[14px] leading-5 text-zinc-600 flex">
          Home <ChevronRightIcon className="w-4 h-4 text-gray-600 m-[3px]" />
        </Link>
        <a className="pr-3 text-[14px] leading-5 text-zinc-600  flex flex-row ">
          Woman{" "}
          <ChevronRightIcon className="w-4 h-4 text-[1.5px] text-gray-600 m-[3px]" />
        </a>
        <a className="text-[14px] leading-5 text-zinc-600 ">Clothes</a>
      </div>
    </div>
  );
};
export default NavCat;
