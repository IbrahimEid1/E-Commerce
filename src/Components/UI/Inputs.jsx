import React, { forwardRef } from "react";

const Inputs = forwardRef(({ label, type,placeholder, onChange , error, ...rest }, ref) => {
  return (
    <div>
      {label && <label className="block text-gray-600 mb-1">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
        ref={ref}   
        {...rest}   
        onChange={onChange}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
});

export default Inputs;
