import React from "react";

const HamMenu = (props) => {
  return (
    <div
      className="flex flex-col w-[30px] h-[50px] justify-center items-center gap-2 md:hidden"
      onClick={props.openMenu}
    >
      <div className="w-[100%] h-[3px] bg-[#ffd01d]"></div>
      <div className="w-[100%] h-[3px] bg-[#ffd01d]"></div>
      <div className="w-[100%] h-[3px] bg-[#ffd01d]"></div>
    </div>
  );
};

export default HamMenu;
