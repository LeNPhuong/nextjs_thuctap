import React from "react";
import BoxService from "./Menuservice/BoxService";
import BoxMenu from "./MenuList/BoxMenu";

const Header = () => {
  return (
    <header className="max-h-[143px] shadow-custome1 font-v1">
      <div className="w-full h-full">
        <BoxService />
        <BoxMenu />
      </div>
    </header>
  );
};

export default Header;
