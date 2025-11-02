import { X } from 'lucide-react';

export default function DoneOrder({isOpen , onClose}) {
    if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-  center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-slideUp">
        {/* Close Button */}
        <button  onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition">
          <X className="w-6 h-6"  />
        </button>

        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 rounded-full p-4">
            <svg className="w-16 h-16 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            Order Placed Successfully! 🎉
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Your order has been confirmed and everything is good to go. We'll deliver it to you soon!
          </p>
          
          {/* Additional Info */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-600">
              Order Number: <span className="font-bold text-indigo-600">#12345</span>
            </p>
          </div>

          {/* Confirm Button */}
          <button onClick={onClose} className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition transform hover:scale-105">
            Got it, Thanks!
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}