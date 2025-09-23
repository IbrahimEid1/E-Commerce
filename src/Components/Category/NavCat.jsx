import { Link } from "react-router-dom";
import { ChevronRightIcon } from "lucide-react";
import { memo } from "react";

const NavCat = ({ Title, Type }) => {
  return (
    <div className="w-[100%] h-[1vh] bg-white flex justify-center items-center mt-8">
      <div className="container w-[100%] h-[100%]  flex">
        <Link to="/" className="pr-3 text-[14px] leading-5 text-zinc-600 flex">
          Home <ChevronRightIcon className="w-4 h-4 text-gray-600 m-[3px]" />
        </Link>
        <a className="pr-3 text-[14px] leading-5 text-zinc-600  flex flex-row ">
          {Title}
          <ChevronRightIcon className="w-4 h-4 text-[1.5px] text-gray-600 m-[3px]" />
        </a>
        <a className="text-[14px] leading-5 text-zinc-600 "> {Type} </a>
      </div>
    </div>
  );
};
export default memo(NavCat);
