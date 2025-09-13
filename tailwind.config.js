/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js", // لازم تضيف السطر ده
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"), // إضافة بلجن Flowbite
  ],
};
