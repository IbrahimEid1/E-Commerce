import { useState, useEffect } from 'react';
// أيقونات مناسبة
import { ShoppingBag, Star, Package, CheckCircle } from 'lucide-react';

export default function Loading() {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { icon: ShoppingBag, text: 'تحضير قائمة المنتجات الجديدة', color: 'text-gray-700' },
    { icon: Star, text: 'تجهيز العروض الحصرية', color: 'text-rose-500' }, 
    { icon: Package, text: 'تأكيد خيارات الشحن السريع', color: 'text-gray-700' },
    { icon: CheckCircle, text: 'إنهاء تأمين البيانات والدفع', color: 'text-green-500' }
  ];

  // الإعدادات الزمنية
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 40);

    const stepInterval = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % steps.length);
    }, 1800);

    return () => {
      clearInterval(progressInterval);
      clearInterval(stepInterval);
    };
  }, []);

  const CurrentIcon = steps[currentStep].icon;
  const primaryColor = 'rose'; 

  return (
    // الخلفية البيضاء مع لمسة خفيفة
    <div className="fixed inset-0 bg-white overflow-hidden">
      
      {/* نجوم/جسيمات خفيفة جدًا (Rose Gold) */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-${primaryColor}-300 rounded-full`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <style>{`
        /* إعادة تعريف حركات 3D ولكن مع دوران أبطأ وأكثر هدوءاً */
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-10px) translateX(5px); }
        }
        @keyframes spin3d-subtle {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); } /* دوران حول محور Y فقط ليكون أقل إزعاجاً */
        }
        @keyframes pulse3d-soft {
          0%, 100% { transform: scale(1) translateZ(0px); }
          50% { transform: scale(1.05) translateZ(10px); } /* نبض خفيف */
        }
        @keyframes fadeInSlideUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        
        {/* حاوية 3D - تم تصميمها لتبدو كعلبة هدايا راقية */}
        <div className="relative mb-12 preserve-3d" style={{ perspective: '1000px' }}>
          
          {/* المكعب/الصندوق الدوار بألوان Rose Gold و White */}
          <div 
            className="relative w-36 h-36 preserve-3d"
            style={{ animation: 'spin3d-subtle 12s linear infinite' }} /* أبطأ بكثير */
          >
            {/* وجه 1: Rose Gold */}
            <div className={`absolute w-36 h-36 bg-${primaryColor}-200/90 border-4 border-white/50 rounded-lg shadow-xl`}
                 style={{ transform: 'rotateY(0deg) translateZ(68px)' }} />
            {/* وجه 2: White/Cream */}
            <div className="absolute w-36 h-36 bg-white/90 border-4 border-gray-200/50 rounded-lg shadow-xl"
                 style={{ transform: 'rotateY(90deg) translateZ(68px)' }} />
            {/* وجه 3: Rose Gold Gradient */}
            <div className={`absolute w-36 h-36 bg-gradient-to-br from-${primaryColor}-300 to-${primaryColor}-100 border-4 border-white/50 rounded-lg shadow-xl`}
                 style={{ transform: 'rotateY(180deg) translateZ(68px)' }} />
            {/* وجه 4: White/Cream */}
            <div className="absolute w-36 h-36 bg-white/90 border-4 border-gray-200/50 rounded-lg shadow-xl"
                 style={{ transform: 'rotateY(-90deg) translateZ(68px)' }} />
            {/* وجه علوي وسفلي بلون موحد */}
            <div className={`absolute w-36 h-36 bg-${primaryColor}-400/90 border-4 border-white/50 rounded-lg shadow-xl`}
                 style={{ transform: 'rotateX(90deg) translateZ(68px)' }} />
            <div className={`absolute w-36 h-36 bg-${primaryColor}-400/90 border-4 border-white/50 rounded-lg shadow-xl`}
                 style={{ transform: 'rotateX(-90deg) translateZ(68px)' }} />
          </div>

          {/* الأيقونة العائمة فوق الصندوق */}
          <div 
            className="absolute inset-0 flex items-center justify-center"
            style={{ animation: 'pulse3d-soft 3s ease-in-out infinite' }}
          >
            {/* الأيقونة بلون داكن لتباين جيد */}
            <CurrentIcon className="w-16 h-16 text-gray-800 transition-colors duration-500 drop-shadow-lg" 
                         strokeWidth={1.5} />
          </div>
        </div>

        {/* اسم المتجر - خط كلاسيكي أنيق (Serif font) */}
        <h1 className="text-5xl font-serif font-light text-gray-900 mb-4 tracking-widest" 
            style={{ animation: 'fadeInSlideUp 0.8s ease-out' }}>
          <span className={`text-gray-900`}>
            <span className="text-gray-900 font-medium">Luxe</span> <span className={`text-${primaryColor}-500 font-light`}>Boutique</span>
          </span>
        </h1>
        {/* شعار فرعي راقٍ */}
        <p className="text-sm text-gray-500 mb-12 tracking-wider" style={{ animation: 'fadeInSlideUp 1s ease-out' }}>
            WHERE STYLE MEETS ELEGANCE
        </p>

        {/* شريط التقدم والخطوة الحالية */}
        <div className="w-full max-w-sm mb-6">
          <div className="mb-4 h-6 overflow-hidden">
            <p 
                key={currentStep}
                className={`text-base font-serif text-gray-700`}
                style={{ animation: 'fadeInSlideUp 0.6s ease-out' }}
            >
                {steps[currentStep].text}
            </p>
          </div>
            
          <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className={`h-full bg-${primaryColor}-500 rounded-full transition-all duration-300 relative`}
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white/50" />
            </div>
          </div>
          <p className="text-gray-500 text-right text-xs mt-1 font-sans">{Math.floor(progress)}%</p>
        </div>

        {/* مؤشر الخطوات أسفل الشاشة */}
        <div className="absolute bottom-10 flex gap-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className={`transition-all duration-500 p-2 border-b-2 ${
                  idx === currentStep 
                    ? `border-${primaryColor}-500 scale-105 opacity-100` 
                    : 'border-transparent opacity-30'
                }`}
              >
                <Icon className={`w-6 h-6 text-gray-800`} strokeWidth={1.5} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}