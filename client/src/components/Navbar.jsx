import React, { useState } from "react";
import { Link } from "react-router-dom";
import HamMenu from "./HamMenu";
import { motion } from "motion/react";

const Navbar = () => {
  const styles = {
    link: "cursor-pointer transition ease-in delay-170 hover:text-[#ffd01d]",
  };
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#000] w-full flex justify-between items-center px-10 py-4 sticky top-0">
      <div className="max-w-full h-15">
        <Link to={"/"}>
          <img className="max-w-14 md:max-w-24" src="./logo.png" alt="Logo" />
        </Link>
      </div>

      <div>
        <HamMenu openMenu={() => setMenuOpen(!menuOpen)} />
        <ul className="hidden absolute right-1 flex-col gap-5 md:flex md:flex-row md:gap-3 justify-center items-center text-[#dad7d4] font-oswald md:text-[20px] text-[15px]">
          <Link to={"/"}>
            <li className={styles.link}>Home</li>
          </Link>
          <Link to={"/schoolandskill"}>
            <li className={styles.link}>School&Skill</li>
          </Link>
          <Link to={"/news"}>
            <li className={styles.link}>Blogs</li>
          </Link>
          <Link to={"/partners"}>
            <li className={styles.link}>Partners</li>
          </Link>
          <Link to={"/donation"}>
            <li className={styles.link}>Donate</li>
          </Link>
        </ul>
        {menuOpen && (
          <motion.ul
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.2, type: "tween", duration: 0.5 }}
            className="absolute right-1 flex-col gap-5 md:flex md:flex-row md:gap-3 justify-center items-center text-[#dad7d4] font-oswald md:text-[20px] text-[15px]"
          >
            <Link to={"/"}>
              <li className={styles.link}>Home</li>
            </Link>
            <Link to={"/schoolandskill"}>
              <li className={styles.link}>School&Skill</li>
            </Link>
            <Link to={"/news"}>
              <li className={styles.link}>Blogs</li>
            </Link>
            <Link to={"/partners"}>
              <li className={styles.link}>Partners</li>
            </Link>
            <Link to={"/donation"}>
              <li className={styles.link}>Donate</li>
            </Link>
          </motion.ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
