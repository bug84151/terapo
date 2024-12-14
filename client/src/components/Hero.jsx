import React from "react";
import { Link } from "react-router-dom";

const Hero = ({ title, subText }) => {
  const styles = {
    hero: "h-[80vh] bg-[#000] text-[#dad7d4] text-[13vw] justify-center items-center gap-10 font-black font-oswald flex flex-col md:w-full",
  };
  return (
    <div className={styles.hero}>
      <div className="flex justify-center items-center gap-8">
        <div>{title}</div>
      </div>
      <div className="text-[#ffd01d] text-center text-3xl font-black">
        {subText}
      </div>
      <Link to={"./donation"}>
        <div className="w-[200px] h-[80px] bg-[#ffd01d] mt-10 font-black font-oswald rounded-lg text-[#000] text-[30px] flex justify-center items-center">
          DONATE
        </div>
      </Link>
    </div>
  );
};

export default Hero;
