import React from 'react';
import { Users, ShoppingBag } from 'lucide-react';

export default function UserDataSpinner() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-start justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-md w-full">
        {/* Animated Icon Container */}
        <div className="relative flex justify-center items-center mb-8">
          {/* Outer rotating ring */}
          <div className="absolute w-32 h-32 border-4 border-transparent border-t-blue-500 border-r-indigo-500 rounded-full animate-spin"></div>
          
          {/* Middle rotating ring */}
          <div className="absolute w-24 h-24 border-4 border-transparent border-b-purple-500 border-l-pink-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          
          {/* Inner pulsing circle */}
          <div className="absolute w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
          
          {/* Center Icons */}
          <div className="relative z-10 flex items-center justify-center">
            <Users className="w-8 h-8 text-white absolute animate-pulse" />
            <ShoppingBag className="w-4 h-4 text-white absolute translate-x-3 translate-y-3" />
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">
            جاري تحميل البيانات
          </h2>
          <p className="text-gray-600">
            يتم الآن تحميل بيانات المستخدمين الذين اشتروا منتج الملاب س
          </p>
          
          {/* Animated dots */}
          <div className="flex justify-center gap-2 pt-4">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>

          {/* Progress bar */}
          <div className="mt-6 bg-gray-200 rounded-full h-2 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 animate-pulse rounded-full" style={{ width: '60%' }}></div>
          </div>

          {/* Stats preview */}
          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            <div className="bg-blue-50 rounded-lg p-3">
              <div className="text-2xl font-bold text-blue-600 animate-pulse">...</div>
              <div className="text-xs text-gray-600 mt-1">Users</div>
            </div>
            <div className="bg-indigo-50 rounded-lg p-3">
              <div className="text-2xl font-bold text-indigo-600 animate-pulse">...</div>
              <div className="text-xs text-gray-600 mt-1">buying</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-3">
              <div className="text-2xl font-bold text-purple-600 animate-pulse">...</div>
              <div className="text-xs text-gray-600 mt-1">active</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}