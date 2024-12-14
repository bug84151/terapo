import React from "react";

const Contact = () => {
  return (
    <div className="h-[100vh] bg-[#000] w-full text-[#dad7d4] font-black md:text-[48px] text-[24px] px-10">
      <h1 className="text-[#ffd01d] font-black text-[6vw]">CONTACT US</h1>
      <div className="flex flex-col gap-5 md:gap-3 justify-center items-center w-full h-[70%]">
        <div className="flex flex-col md:flex-row gap-3 justify-center items-center w-full h-2/4">
          <div className=" bg-[#dad7d412] flex-1 h-full w-full rounded-lg px-3 py-3 cursor-pointer hover:text-[#000] hover:bg-[#ffd01d] transition ease-in delay-170">
            EMAIL
          </div>
          <div className="bg-[#dad7d412] flex-1 h-full w-full rounded-lg px-3 py-3 cursor-pointer hover:text-[#000] hover:bg-[#ff1c77] transition ease-in delay-170">
            INSTAGRAM
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3 justify-center items-center w-full h-2/4">
          <div className="bg-[#dad7d412] flex-1 md:h-full w-full  rounded-lg px-3 py-3 cursor-pointer hover:text-[#000] hover:bg-[#44ffd1] transition ease-in delay-170">
            PHONE
          </div>
          <div className="bg-[#dad7d412] flex-1 md:h-full w-full  rounded-lg px-3 py-3 cursor-pointer hover:text-[#000] hover:bg-[#fff] transition ease-in delay-170">
            ADDRESS
          </div>
          <div className="bg-[#dad7d412] flex-1 md:h-full w-full  rounded-lg px-3 py-3 cursor-pointer hover:text-[#000] hover:bg-[#2176ff] transition ease-in delay-170">
            LINKEDIN
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
