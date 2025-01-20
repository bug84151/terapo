import React from "react";

const Partners = () => {
  return (
    <div className="flex flex-col gap-5 px-10 bg-[#000] py-5 w-full">
      <div>
        <div className="text-[#ffd01d] font-black text-[1.8rem]">SPONSORS</div>
        <div className="flex gap-2 w-full h-[15vh] md:h-[30vh] bg-[#000]">
          <img src="./sponsors/l5.jpeg" className="rounded-lg h-full" />
          <img src="./sponsors/s2.jpg" className="rounded-lg h-full" />
        </div>
      </div>
      <div className="w-full">
        <div className="text-[#ffd01d] font-black text-[1.8rem]">PARTNERS</div>
        <div className="grid grid-cols-3 gap-2 w-full bg-[#000] ">
          <img src="./sponsors/l5.jpeg" className="rounded-lg object-cover" />
          <img src="./sponsors/s2.jpg" className="rounded-lg object-cover" />
          <img src="./sponsors/l1.jpg" className="rounded-lg object-cover" />
          <img src="./sponsors/l2.JPG" className="rounded-lg object-cover" />
          <img src="./sponsors/l3.png" className="rounded-lg object-cover" />
          <img src="./sponsors/l4.png" className="rounded-lg object-cover" />
          <img src="./sponsors/p1.jpg" className="rounded-lg object-cover" />
          <img src="./sponsors/p2.jpg" className="rounded-lg object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
