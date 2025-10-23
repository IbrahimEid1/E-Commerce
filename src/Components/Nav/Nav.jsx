import React, { memo } from "react";
import NavBlack from "./NavBlack";
import NavMenu from "./NavMenu";

const Nav = () => {
  return (
    <header className="w-full sticky top-0 z-50">
      <NavBlack />
      <div className="bg-white shadow-md border-b border-gray-200">
        <NavMenu />
      </div>
    </header>
  );
};

export default memo(Nav);
