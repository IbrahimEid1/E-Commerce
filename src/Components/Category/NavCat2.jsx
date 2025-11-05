import { memo, useEffect, useState } from "react";
import { X as CloseIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NavCat2 = ({ Title, prop }) => {
  const [open, setOpen] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate();

  // ✅ قراءة بيانات المستخدم من sessionStorage
  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserRole(parsedUser?.role?.name || null);
    }
  }, []);

  return (
    <div
      style={{ backgroundColor: "rgb(233,233,233,1)" }}
      className="w-[100%] h-[10vh] flex justify-center items-center mt-8"
    >
      <div className="container w-[100%] h-[100%] flex items-center justify-between">
        <div className="Title flex items-center w-[100%] justify-between">
          <a className="pr-3 font-bold leading-5 text-[20px] text-zinc-600 flex flex-row">
            {Title}
          </a>
          <p className="text-[16px] leading-5 font-normal">{prop}</p>

          {/* ✅ السماح فقط للـ Admin */}
          {userRole === "Admin" && (
            <button
              className="p-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition"
              onClick={() => navigate("/addnew")}
            >
              Add New Product
            </button>
          )}
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[60%] max-w-lg relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
            >
              <CloseIcon />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(NavCat2);
