import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const styles = {
    link: "cursor-pointer transition ease-in delay-170 hover:text-[#ffd01d]",
  };

  return (
    <div className="bg-[#000] w-full flex justify-between items-center px-10 py-4 sticky top-0">
      <div className="max-w-full h-15">
        <img className="max-w-14 md:max-w-24" src="./logo.png" alt="Logo" />
      </div>
      <div>
        <ul className="flex gap-3 justify-center items-center text-[#dad7d4] font-oswald md:text-[20px] text-[15px]">
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
      </div>
    </div>
  );
};

export default Navbar;
