/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        // تعريف animation spin-slow (لجعلها أبطأ)
        'spin-slow': 'spin 3s linear infinite', 
        // تعريف animation pulse-slow (لجعلها أبطأ)
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      // هنا يمكنك إضافة المزيد من الـ keyframes إذا أردت تخصيصاً أكبر
      // keyframes: {
      //   'zoom-in-custom': {
      //     '0%': { transform: 'scale(0.5)', opacity: '0' },
      //     '100%': { transform: 'scale(1)', opacity: '1' },
      //   }
      // }
    },
  },
  plugins: [
    require('tailwindcss-animate'), // 👈 أضف هذا المكون الإضافي هنا
  ],
};