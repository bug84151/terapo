import React from "react";

const Contact = () => {
  return (
    <div className="md:h-[100vh] flex flex-col justify-center items-center bg-[#000] w-full text-[#dad7d4] font-black md:text-[48px] text-[24px] px-10 italic">
      <h1 className="text-[#ffd01d] font-black text-[6vw] mb-4">CONTACT US</h1>
      <div className="flex flex-col gap-5 md:gap-3 justify-center items-center w-full md:h-full">
        <div className="flex flex-col md:flex-row gap-3 justify-center items-center w-full md:h-2/4">
          <div className=" bg-[#dad7d412] flex flex-col justify-between h-[200px] md:flex-1 md:h-full w-full rounded-lg px-3 py-3 cursor-pointer hover:text-[#000] hover:bg-[#ffd01d] transition ease-in delay-170">
            <span>EMAIL</span>
            <span className="text-[16px]">terapooffice@gmail.com</span>
          </div>
          <div className="bg-[#dad7d412] h-[200px] md:flex-1 flex flex-col justify-between md:h-full w-full rounded-lg px-3 py-3 cursor-pointer hover:text-[#000] hover:bg-[#ff1c77] transition ease-in delay-170">
            <span>INSTAGRAM</span>
            <span className="text-[16px]">@TerapoOffice</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3 justify-center items-center w-full h-2/4">
          <div className="bg-[#dad7d412] flex flex-col justify-between h-[200px] md:flex-1 md:h-full w-full  rounded-lg px-3 py-3 cursor-pointer hover:text-[#000] hover:bg-[#44ffd1] transition ease-in delay-170">
            <span>PHONE</span>
            <span className="text-[16px]">+2348070926411</span>
          </div>
          <div className="bg-[#dad7d412] flex flex-col justify-between h-[200px] md:flex-1 md:h-full w-full  rounded-lg px-3 py-3 cursor-pointer hover:text-[#000] hover:bg-[#fff] transition ease-in delay-170">
            <span>ADDRESS</span>
            <span className="text-[16px]">
              Febson Mall,2425 Herbert Macaulay way,Abuja
            </span>
          </div>
          <div className="bg-[#dad7d412] flex flex-col justify-between h-[200px] md:flex-1 md:h-full w-full  rounded-lg px-3 py-3 cursor-pointer hover:text-[#000] hover:bg-[#2176ff] transition ease-in delay-170">
            <span>LINKEDIN</span>
            <span className="text-[16px]">@TerapoOffice</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
