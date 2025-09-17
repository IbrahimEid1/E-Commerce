import Buttons from "../../UI/Buttons";

const NavCat2 = () => {
  return (
    <div
      style={{ backgroundColor: "rgb(233,233,233,1)" }}
      className="w-[100%] h-[10vh] flex justify-center items-center mt-8"
    >
      <div className="container w-[100%] h-[100%]  flex items-center justify-between">
        <div className="Title flex ">
          <a className="pr-3 font-bold leading-5 text-[20px]  text-zinc-600   flex flex-row ">
            Woman{" "}
          </a>
          <p className="text-[16px] leading-5 font-normal">110 Items</p>
        </div>
        <div className="containerbtn">
          <Buttons
            className={
              "bg-transparent border-2 border-gray-700 w-[150px] h-[45px] rounded-md"
            }
            text={"Sort By Order "}
          />
        </div>
      </div>
    </div>
  );
};
export default NavCat2;
