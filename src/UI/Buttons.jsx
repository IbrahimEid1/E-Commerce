import React from "react";

const Buttons = ({ className, text, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};
export default Buttons;
