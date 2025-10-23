import { memo, useState } from "react";
import {X as CloseIcon,} from "lucide-react";
import AddNew from "../AddNewProduct/AddNew";
import { useNavigate } from "react-router-dom";

 const NavCat2 = ({ Title, prop }) => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  return (
    <div
      style={{ backgroundColor: "rgb(233,233,233,1)" }}
      className="w-[100%] h-[10vh] flex justify-center items-center mt-8"
    >
      <div className="container w-[100%] h-[100%]  flex items-center justify-between">
        <div className="Title flex items-center w-[100%] justify-between ">
          <a className="pr-3 font-bold leading-5 text-[20px]  text-zinc-600   flex flex-row ">
            {Title}
          </a>
          <p className="text-[16px] leading-5 font-normal"> {prop} </p>
          <button className="p-3 text-white bg-blue-500 rounded-md" onClick={()=>setOpen(true)} >
          Add New Product </button>
        </div>
      </div>
    {open && ( 
        <div className="fixed inset-0  bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg p-6 w-[60%] max-w-lg relative">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
          >
            <CloseIcon />
          </button>
        </div>
        {navigate("/addnew")}
        </div>
    )}
    </div>
  );
};
export default memo(NavCat2);
