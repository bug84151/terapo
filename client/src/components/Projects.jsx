import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="px-10 py-5 bg-[#000] flex flex-col justify-center items-center pb-28 italic">
      <div className=" md:h-[80vh] w-full flex gap-5 py-5 md:flex-row flex-col">
        <img
          src="./mvm3.jpg"
          alt="img1"
          className="w-full md:w-[50%] rounded-lg object-cover"
        />
        <img
          src="./lt1.jpg"
          alt="img1"
          className="w-full md:w-[50%] rounded-lg object-cover"
        />
      </div>
      <img
        src="./lt2.jpg"
        alt="img2"
        className="w-full md:h-screen rounded-lg object-cover"
      />
      <div className="md:h-[80vh] w-full flex gap-5 py-5 md:flex-row flex-col">
        <img
          src="./mvm2.jpg"
          alt="img1"
          className="w-full md:w-[50%] rounded-lg object-cover"
        />
        <img
          src="./lt3.jpg"
          alt="img1"
          className="w-full md:w-[50%] rounded-lg object-cover"
        />
      </div>
      <Link to={"./donation"}>
        <div className="w-[200px] h-[80px] bg-[#ffd01d] mt-10 font-black font-oswald rounded-lg text-[#000] text-[30px] flex justify-center items-center">
          DONATE
        </div>
      </Link>
    </div>
  );
};

export default Projects;
