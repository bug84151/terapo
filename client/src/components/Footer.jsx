import React from "react";

const Footer = () => {
  return (
    <div className="flex w-full justify-between items-center text-[#dad7d4] px-10 py-4 bg-[#000]">
      <p className="text-sm">Copyright © 2024. All rights reserved.</p>
      <ul className="font-oswald hidden w-[70%] md:flex gap-2">
        <li className="flex flex-1 flex-col px-2 py-2 rounded-lg bg-[#dad7d412] cursor-pointer hover:text-[#000] hover:bg-[#ff1c77] transition ease-in delay-170">
          <a href="">INSTAGRAM</a>
          <span>@TerapoOffice</span>
        </li>
        <li className="flex flex-1 flex-col px-2 py-2 rounded-lg bg-[#dad7d412] cursor-pointer hover:text-[#000] hover:bg-[#fff] transition ease-in delay-170">
          <a href="">X</a>
          <span>@TerapoOffice</span>
        </li>
        <li className="flex flex-1 flex-col px-2 py-2 rounded-lg bg-[#dad7d412] cursor-pointer hover:text-[#000] hover:bg-[#ffd01d] transition ease-in delay-170">
          <a href="">EMAIL</a>
          <span>terapooffice@gmail.com</span>
        </li>
        <li className="flex flex-1 flex-col px-2 py-2 rounded-lg bg-[#dad7d412] cursor-pointer hover:text-[#000] hover:bg-red-400 transition ease-in delay-170">
          <a href="">YOUTUBE</a>
          <span>@TerapoOffice</span>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
