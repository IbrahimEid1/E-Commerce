import { Settings, LogOut ,  } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DropdownUser = () => {
const navigate = useNavigate();
  return (
    <> 
  
      <div 
          className="origin-top-right absolute right-0 mt-2 w-48 rounded-lg shadow-2xl bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu-button"
          tabIndex="-1"
      >
          {/* قسم عناصر القائمة */}
          <div className="py-1" role="none">
              {/* خيار الإعدادات (Settings) */}
              <a
                  href="#" // ضع هنا مسار صفحة الإعدادات
                  className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-150 ease-in-out"
                  role="menuitem"
                  tabIndex="-1"
              >
                  <Settings className="w-5 h-5 ml-3" />
                  الإعدادات (Settings)
              </a>

              {/* خيار تسجيل الخروج (Log Out) */}
              <button onClick={()=> {
                    localStorage.removeItem("token");
                    navigate("/login");
                  }}
                  
              
                  className="flex items-center w-full px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition duration-150 ease-in-out border-t border-gray-100"
                  role="menuitem"
                  tabIndex="-1"
              >
                  <LogOut className="w-5 h-5 ml-3"  />
                  تسجيل الخروج (Log Out)
              </button>
          </div>
      </div>
  </>
  )
}

export default DropdownUser