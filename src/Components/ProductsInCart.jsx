import { useContext, memo, useState, useCallback } from "react";
import { CartContext } from "../context/ContextCart";
import { Handbag, Trash, X } from "lucide-react";
import { Link } from "react-router-dom";

// ----------------------------------------------------------------------
// مكون فرعي: عرض عنصر سلة التسوق
// ----------------------------------------------------------------------
const CartItemDisplay = memo(({ item, removeItem }) => (
  <div className="py-3 flex gap-3 items-center hover:bg-gray-50 transition duration-150 rounded-md pr-2">
    {/* تم إصلاح مسار الصورة ليستخدم item.Image.url كما هو في كود الـDesktop */}
    <img
      src={item.Image?.url || item.image}
      alt={item.title}
      className="w-16 h-16 rounded-lg flex-shrink-0 object-cover border border-gray-100"
    />
    <div className="flex-1 min-w-0">
      <div className="text-sm font-medium text-gray-900 truncate">
        {item.title}
      </div>
      <div className="text-xs text-gray-500 mt-1 font-mono">
        ${item.price} x {item.quantity}
      </div>
    </div>
    
    {/* زر الإزالة (Trash icon) */}
    <button
      onClick={() => removeItem(item.id)}
      className="text-gray-400 hover:text-red-600 p-1 rounded-full transition duration-150 focus:outline-none focus:ring-2 focus:ring-red-500"
      aria-label={`Remove ${item.title} from cart`}
    >
      <Trash width={16} height={16} />
    </button>
  </div>
));

// ----------------------------------------------------------------------
// مكون فرعي: محتوى قائمة سلة التسوق لسطح المكتب (Desktop Dropdown)
// ----------------------------------------------------------------------
const DesktopCartMenu = ({ cartCount, RemoveAll, removeItem, isOpen, setIsOpen }) => {
  const totalItems = cartCount.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div
      className={`hidden md:block origin-top-right absolute -right-4 top-7 mt-3 w-80 rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 z-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
      }`}
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="cart-menu-button"
      tabIndex="-1"
    >
      <div className="p-4">
        {/* رأس القائمة */}
        <div className="flex justify-between items-center pb-3 border-b border-gray-100">
            <h3 className="text-lg font-bold text-gray-900">
                Shopping Cart ({totalItems})
            </h3>
             <button 
                onClick={() => setIsOpen(false)} 
                className="text-gray-400 hover:text-gray-600 transition p-1 rounded-full hover:bg-gray-100"
                aria-label="Close cart menu"
            >
                <X size={20} />
            </button>
        </div>
        
        {/* محتوى المنتجات */}
        <div className="max-h-80 overflow-y-auto divide-y divide-gray-100 mt-2">
          {cartCount.length ? (
            cartCount.map((item, index) => (
              <CartItemDisplay key={index} item={item} removeItem={removeItem} />
            ))
          ) : (
            <div className="text-gray-500 flex flex-col justify-center items-center py-8">
              <Handbag size={36} className="mb-3 text-gray-300" />
              <p className="text-sm">No products in your basket.</p>
            </div>
          )}
        </div>

        {/* أزرار الإجراءات */}
        {cartCount.length > 0 && (
          <div className="mt-4 flex gap-3 pt-4 border-t border-gray-100">
            <button
              className="flex-1 py-2 rounded-lg text-center border border-red-500 text-red-500 font-semibold text-sm hover:bg-red-50 transition duration-150"
              onClick={() => RemoveAll("cart")}
            >
              Remove All
            </button>
            <Link
              to={"/checkout"}
              onClick={() => setIsOpen(false)} // إغلاق القائمة عند الانتقال للدفع
              className="flex-1 py-2 rounded-lg text-center bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition duration-150 shadow-md"
            >
              Checkout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

// ----------------------------------------------------------------------
// مكون فرعي: محتوى قائمة سلة التسوق للمحمول (Mobile Drawer)
// ----------------------------------------------------------------------
const MobileCartMenu = ({ cartCount, RemoveAll, removeItem, isOpen, setIsOpen }) => {
    if (!isOpen) return null;

    const totalItems = cartCount.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <div className="md:hidden fixed inset-0 z-50 flex" aria-modal="true" role="dialog">
            {/* الخلفية المعتمة */}
            <div
                className="fixed inset-0 bg-black/50"
                onClick={() => setIsOpen(false)}
                aria-label="Close cart menu"
            />

            {/* سحب القائمة الجانبية (Drawer) */}
            <div className="relative w-full max-w-xs bg-white shadow-2xl h-full ml-auto flex flex-col transform transition-transform duration-300 ease-in-out">
                
                {/* رأس القائمة */}
                <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-gray-900">
                        Your Cart ({totalItems})
                    </h2>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-gray-600 hover:text-black p-1 rounded-full hover:bg-gray-100 transition"
                        aria-label="Close cart"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* محتوى المنتجات */}
                <div className="flex-1 overflow-y-auto divide-y divide-gray-100 p-4">
                    {cartCount.length ? (
                        cartCount.map((item, index) => (
                            // استخدام مكون العرض الموحد
                            <CartItemDisplay key={index} item={item} removeItem={removeItem} />
                        ))
                    ) : (
                        <div className="flex flex-col justify-center items-center mt-10 text-gray-500">
                            <Handbag size={50} className="mb-3 text-gray-300" />
                            <p className="text-sm">Your basket is empty.</p>
                        </div>
                    )}
                </div>

                {/* أزرار الإجراءات */}
                {cartCount.length > 0 && (
                    <div className="p-4 border-t border-gray-100 flex gap-3 flex-shrink-0">
                        <button
                            className="flex-1 py-3 rounded-lg text-center border border-red-500 text-red-500 font-semibold hover:bg-red-50 transition"
                            onClick={() => RemoveAll("cart")}
                        >
                            Remove All
                        </button>
                        <Link
                            to={"/checkout"}
                            onClick={() => setIsOpen(false)} // إغلاق القائمة عند الانتقال للدفع
                            className="flex-1 py-3 rounded-lg text-center bg-blue-600 text-white font-semibold hover:bg-blue-700 transition shadow-lg"
                        >
                            Checkout
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

// ----------------------------------------------------------------------
// المكون الرئيسي: CartMenu
// ----------------------------------------------------------------------
const CartMenu = () => {
  const { cartCount, RemoveAll, removeItem } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const totalQuantity = cartCount.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="relative inline-block text-left">
      {/* زر فتح وإغلاق سلة التسوق */}
      <button
        type="button"
        className="inline-flex justify-center items-center p-2 rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
        onClick={toggleCart}
        aria-expanded={isOpen}
        aria-controls="cart-dropdown-menu" // لتحديد أن هذا الزر يتحكم في القائمة
        id="cart-menu-button"
      >
        <Handbag className="w-6 h-6" aria-hidden="true" />
        {totalQuantity > 0 && (
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
            {totalQuantity}
          </span>
        )}
      </button>

      {/* قائمة سطح المكتب المنسدلة (Dropdown) */}
      <DesktopCartMenu
        cartCount={cartCount}
        RemoveAll={RemoveAll}
        removeItem={removeItem}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      {/* قائمة المحمول الجانبية (Drawer) */}
      <MobileCartMenu
        cartCount={cartCount}
        RemoveAll={RemoveAll}
        removeItem={removeItem}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  );
};

export default memo(CartMenu);