import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const Hero = ({ title, subText }) => {
  const styles = {
    hero: "h-[80vh] bg-[#000] text-[#dad7d4] text-[13vw] justify-center items-center gap-10 font-black font-oswald flex flex-col md:w-full",
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className={styles.hero}
    >
      <div className="flex justify-center items-center gap-8 italic">
        <div>{title}</div>
      </div>
      <div className="text-[#ffd01d] text-center text-3xl font-black italic">
        {subText}
      </div>
      <Link to={"./donation"}>
        <motion.div
          animate={{ scale: 1.5 }}
          className="w-[200px] h-[80px] bg-[#ffd01d] mt-10 font-black font-oswald rounded-lg text-[#000] text-[30px] flex justify-center items-center italic"
        >
          DONATE
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default Hero;
