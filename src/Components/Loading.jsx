import { Loader2 } from "lucide-react"; 
import ShopXLogo from "../assets/unnamed.jpg"; 

const ShopXLoader = ({ fullScreen = true }) => {
  const containerClasses = fullScreen
    ? "fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-75 backdrop-blur-sm"
    : "flex items-center justify-center w-full h-full min-h-[200px]";

  return (
    <div className={containerClasses}>
      <div 
        className="flex flex-col items-center justify-center 
                   animate-in fade-in zoom-in duration-700 ease-out" 
        // 👆 هذه الكلاسات هي مفتاح التأثير:
        // animate-in: لتفعيل الانيميشن عند الدخول
        // fade-in: لجعلها تظهر تدريجياً
        // zoom-in: لجعلها تكبر من مقياس صغير
        // duration-700: مدة الانيميشن 700 مللي ثانية
        // ease-out: لتسريع الانيميشن في البداية وتبطئ في النهاية
      >
        
        <img 
          src={ShopXLogo} 
          alt="ShopX Loading"
          className="w-20 h-20 md:w-24 md:h-24 object-contain animate-spin-slow" 
          // ☝️ غيرت 'animate-spin' إلى 'animate-spin-slow' (سنعرفها في config)
          // لتجنب تداخل الانيميشن السريع مع تأثير الـ zoom-in الأبطأ.
        />

        <p className="mt-4 text-lg font-medium text-gray-700">
          Loading ShopX...
        </p>
        
        <div className="w-16 h-1 bg-red-600 rounded-full mt-2 animate-pulse-slow"></div>
         {/* ☝️ غيرت 'animate-pulse' إلى 'animate-pulse-slow' (سنعرفها في config) */}

      </div>
    </div>
  );
};

export default ShopXLoader;